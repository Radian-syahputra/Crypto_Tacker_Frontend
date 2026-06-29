import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../services/authService";
import useAuthStore from "../store/authStore";
import  { useState } from "react";
import { Link } from "react-router-dom";
import { Hexagon } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, isLoading, setLoading } = useAuthStore();
  const navigate = useNavigate();

  const loginHandler = async (e : React.FormEvent) => {
    e.preventDefault()

    if(!email || !password) {
      return toast.error("Inputan Tidak Boleh Kosong")
    }

    setLoading(true)

    try {
      const response = await login(email, password);
      setUser(response.data);
      toast.success('Login Berhasil Bro')
      navigate("/");
    } catch (error) {
      toast.error('Email atau password salah!')
    }finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
           <div className="text-center">
            <div className="avatar placeholder mb-4">
              <div className="bg-primary text-primary-content rounded-full w-14">
                <span className="text-xl font-semibold text-center justify-center mt-3 flex">
                  <Hexagon className="w-8 h-8 "/>
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-bold">Masuk Akun</h1>
            <p className="mt-2 text-base-content/70">
              Kelola portfolio crypto Anda dengan mudah.
            </p>
          </div>
          <form onSubmit={loginHandler} className="space-y-2">
            <div className="p-2">
              <label className="font-semibold text-primary">Email</label>
              <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="p-2">
              <label className="font-semibold text-primary">Password</label>
              <input type="password" placeholder="*********" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? (<span className="loading loading-bars loading-md"></span>) : "Login"}
            </button>
            <span>Sudah Belum Punya Akun? {' '}
              <Link to={'/register'} className="text-sm text-blue-500 underline">Register</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginPage;
