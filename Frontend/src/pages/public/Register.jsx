import RegisterForm from "../../components/auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full max-w-md">
      {/* Card */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Register as a student and wait for admin approval
        </p>

        <RegisterForm />

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
