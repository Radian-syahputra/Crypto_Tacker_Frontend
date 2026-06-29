import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FavoritePage from "../pages/FavoritePage";
import CoinDetailPage from "../pages/CoinDetailPage";
import ProfilePage from "../pages/ProfilePage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import GuestRoute from "../components/GuestRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },

      // Protect Route
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/favorite", element: <FavoritePage /> },
          { path: "/profile", element: <ProfilePage /> },
        ],
      },

      { path: "/coin/:id", element: <CoinDetailPage /> },
    ],
  },

  {
    element: <GuestRoute />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default router;
