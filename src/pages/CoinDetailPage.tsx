import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCoinDetail } from "../services/cryptoService";
import type { CoinDetail } from "../types";

const CoinDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [coin, setCoin] = useState<CoinDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const response = await getCoinDetail(id);
        setCoin(response.data ?? response);
      } catch (error) {
        console.error(error);
        setCoin(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [id]);

  const formatCurrency = (value?: number) =>
    value === undefined || value === null ? "N/A" : `$${value.toLocaleString("en-US")}`;

  const formatPercent = (value?: number) =>
    value === undefined || value === null ? "N/A" : `${value.toFixed(2)}%`;

  const getTrendClass = (value?: number) => {
    if (value === undefined || value === null) return "text-base-content";
    return value > 0 ? "text-success" : value < 0 ? "text-error" : "text-base-content";
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <button className="btn btn-outline btn-sm w-fit" onClick={() => navigate(-1)}>
          ← Kembali
        </button>

        {loading ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : !coin ? (
          <div className="alert alert-error shadow-lg">
            <span>Data coin tidak ditemukan.</span>
          </div>
        ) : (
          <>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={coin.image.large}
                      alt={coin.name}
                      className="h-16 w-16 rounded-full border border-base-300 object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold">{coin.name}</h1>
                        <span className="badge badge-primary uppercase">{coin.symbol}</span>
                      </div>
                      <p className="mt-1 text-base-content/70">ID: {coin.id}</p>
                    </div>
                  </div>

                  <div className="rounded-box bg-base-200 p-4 text-left lg:text-right">
                    <p className="text-sm text-base-content/70">Harga Saat Ini</p>
                    <p className="text-3xl font-bold">
                      {formatCurrency(coin.market_data.current_price.usd)}
                    </p>
                    <p className={`mt-2 text-sm font-semibold ${getTrendClass(coin.market_data.price_change_percentage_24h)}`}>
                      {formatPercent(coin.market_data.price_change_percentage_24h)} 24 jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="stat rounded-box bg-base-100 shadow">
                <div className="stat-title">Market Cap</div>
                <div className="stat-value text-lg">
                  {formatCurrency(coin.market_data.market_cap.usd)}
                </div>
              </div>
              <div className="stat rounded-box bg-base-100 shadow">
                <div className="stat-title">Volume 24h</div>
                <div className="stat-value text-lg">
                  {formatCurrency(coin.market_data.total_volume.usd)}
                </div>
              </div>
              <div className="stat rounded-box bg-base-100 shadow">
                <div className="stat-title">7 Hari</div>
                <div className={`stat-value text-lg ${getTrendClass(coin.market_data.price_change_percentage_7d)}`}>
                  {formatPercent(coin.market_data.price_change_percentage_7d)}
                </div>
              </div>
              <div className="stat rounded-box bg-base-100 shadow">
                <div className="stat-title">30 Hari</div>
                <div className={`stat-value text-lg ${getTrendClass(coin.market_data.price_change_percentage_30d)}`}>
                  {formatPercent(coin.market_data.price_change_percentage_30d)}
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Tentang {coin.name}</h2>
                <p className="leading-7 text-base-content/80">
                  {coin.description.en.replace(/\s+/g, " ").trim()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinDetailPage;
