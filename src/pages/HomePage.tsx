import { useEffect, useState } from "react"
import { getCoinList } from "../services/cryptoService"
import type { CoinMarket } from "../types"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const [coins, setCoins] = useState<CoinMarket[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

useEffect(() => {
  const fetchCoins = async () => {
    setLoading(true)
    try {
      const response = await getCoinList(page)
      console.log('Response:', response) // ← tambah ini
      setCoins(response.data)
    } catch (error) {
      console.error('Error:', error) // ← dan ini
    } finally {
      setLoading(false)
    }
  }
  fetchCoins()
}, [page])

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

 return (
  <div className="container mx-auto px-4 py-8">
    {/* Header */}
    <h1 className="text-3xl font-bold mb-6">Cryptocurrency Prices</h1>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Harga</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Volume 24h</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr
              key={coin.id}
              className="hover cursor-pointer"
              onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div className="flex items-center gap-3">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <div>
                    <p className="font-semibold">{coin.name}</p>
                    <p className="text-sm text-gray-500 uppercase">{coin.symbol}</p>
                  </div>
                </div>
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
              <td>${coin.total_volume.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className="btn btn-outline"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}>
        Prev
      </button>
      <span className="font-semibold">Page {page}</span>
      <button
        className="btn btn-outline"
        onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  </div>
)
}

export default HomePage 