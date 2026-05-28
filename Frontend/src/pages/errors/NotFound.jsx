import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
