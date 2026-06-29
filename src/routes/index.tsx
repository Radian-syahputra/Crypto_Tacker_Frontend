import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritePage from "../pages/FavoritePage";
import CoinDetailPage from "../pages/CoinDetailPage";
import ProfilePage from "../pages/ProfilePage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/favorite", element: <FavoritePage /> },
      { path: "/coin/:id", element: <CoinDetailPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

export default router;
