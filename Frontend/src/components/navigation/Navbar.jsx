import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 md:left-64 h-16
                 bg-white border-b z-30
                 flex items-center justify-between
                 px-4 md:px-6">
      <h2 className="font-semibold text-gray-700 truncate">
        Welcome {user?.name || "User"}
      </h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white
                   px-3 py-2 md:px-4 md:py-2
                   rounded hover:bg-red-600
                   whitespace-nowrap">
        Logout
      </button>
    </header>
  );
};

export default Navbar;
