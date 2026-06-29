import useAuthStore from "../store/authStore"
import { register } from "../services/authService"
import toast from "react-hot-toast"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Hexagon } from "lucide-react"

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setUser, isLoading, setLoading} = useAuthStore()
  const navigate = useNavigate()


  const registerHandler = async (e : React.FormEvent) => {
    e.preventDefault()

    if(!username || !email || !password) return toast.error("Semua Inputan Wajib Di Isi")
      
    setLoading(true)
    try {
      const response = await register(username, email, password)
      setUser(response.data)
      toast.success("Berhasil Membuat Akun")
      navigate('/login')
    } catch (error) {
      toast.error("Gagal Membuat Akun")
    }finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          {/* Title */}
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

          {/* Form */}
          <form onSubmit={registerHandler} className="space-y-2">
            <div>
              <label className="font-semibold text-primary">Username</label>
              <input type="text" placeholder="Masukan Username" className="input input-bordered w-full" value={username} onChange={(e) => setUsername(e.target.value)}  />
            </div>

            <div>
              <label className="font-semibold text-primary">Email</label>
              <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <label className="font-semibold text-primary">Password</label>
              <input type="password" placeholder="*********" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="btn btn-primary w-full" disabled={isLoading}>
              {isLoading ? (
                  <span className="loading loading-bars loading-md"></span>
              ) : "Register"}
            </button>
            <span>Sudah Punya Akun? {' '}
              <Link to={'/login'} className="text-sm text-blue-500 underline">Login</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage