import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore()

  if (isLoading) return <div>Loading...</div>  // ← tunggu dulu!
  if (!user) return <Navigate to='/login' />

  return <Outlet />
}
export default ProtectedRoute