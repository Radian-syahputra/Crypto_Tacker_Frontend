import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from "react-router-dom"


const GuestRoute = () => {
    const {user} = useAuthStore()

    if(user) {
        return <Navigate to={'/'}/>
    }

  return (
    <Outlet/>
  )
}

export default GuestRoute