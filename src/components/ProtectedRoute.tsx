import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const {user} = useAuthStore()
    if(!user) return <Navigate to={'/login'}/>

    
  return (
    <Outlet/>
  )
}

export default ProtectedRoute