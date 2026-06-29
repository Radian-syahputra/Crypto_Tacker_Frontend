import { Link, useNavigate } from "react-router-dom";
import { Hexagon, User, LogOutIcon } from "lucide-react";
import useAuthStore from "../store/authStore";
import { logout } from "../services/authService";

const Navbar = () => {
  const { clearUser, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    clearUser();
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start flex items-center gap-2 ml-3 ">
        <Link to={'/'}><Hexagon className="w-8 h-8" /></Link>
        <h1 className="font-bold text-xl ">Cryptoin</h1>
      </div>

      <div className="navbar-center flex gap-6">
        <Link to={"/"} className="font-semibold hover:underline text-blue-600">
          Home
        </Link>
        <Link
          to={"/favorite"}
          className="font-semibold hover:underline text-blue-600">
          Favorite
        </Link>
      </div>

      <div className="navbar-end flex gap-2">
        {user ? (
          <div className="flex items-center gap-4">
            <User className="w-6 h-6" />
            <h2 className="font-semibold text-accent">{user.username}</h2>
            <button onClick={handleLogout} className="btn btn-neutral">
              <LogOutIcon />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn btn-primary" to={"/login"}>
              Login
            </Link>
            <Link className="btn btn-outline" to={"/register"}>
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
