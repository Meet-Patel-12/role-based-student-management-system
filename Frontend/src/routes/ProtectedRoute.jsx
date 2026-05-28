import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role, loading, status } = useSelector(
    (state) => state.auth,
  );

  // ⏳ Auth resolving (refresh / initial load)
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto mb-3" />
          <p className="text-gray-600 text-sm">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // ❌ Not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // 🚫 Role mismatch
  if (allowedRoles && !allowedRoles.includes(role)) {
    return (
      <Navigate
        to="/unauthorized"
        replace
      />
    );
  }

  if (role === "student" && status === "pending") {
    return (
      <Navigate
        to="/waiting-approval"
        replace
      />
    );
  }

  // ✅ Allowed
  return <Outlet />;
};

export default ProtectedRoute;
