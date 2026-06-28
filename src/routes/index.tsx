import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritePage from "../pages/FavoritePage";
import CoinDetailPage from "../pages/CoinDetailPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
    {path : "/", element : <HomePage/> },
    {path : "/login", element : <LoginPage/> },
    {path : "/register", element : <RegisterPage/> },
    {path : "/favorite", element : <FavoritePage/> },
    {path : "/coin/:id", element : <CoinDetailPage/> },
    {path : "/profile", element : <ProfilePage/> },
])

export default router