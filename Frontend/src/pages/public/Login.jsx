import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../features/auth/authSlice";
import LoginForm from "../../components/auth/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated, role } = useSelector(
    (state) => state.auth,
  );

  const handleLogin = (formData) => {
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (isAuthenticated) {
      if (user?.status === "pending") {
        navigate("/waiting-approval");
        return;
      }

      navigate(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
    }
  }, [error, isAuthenticated, role, navigate]);

  return (
    <div className="w-full">
      {loading && (
        <p className="text-center text-gray-500 mb-4">Logging in...</p>
      )}

      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
