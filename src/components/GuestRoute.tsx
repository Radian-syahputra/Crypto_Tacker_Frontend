import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from "react-router-dom"

const GuestRoute = () => {
  const { user, isLoading } = useAuthStore()

  if (isLoading) return <div>Loading...</div>  // ← tunggu dulu!
  if (user) return <Navigate to='/' />

  return <Outlet />
}

export default GuestRoute