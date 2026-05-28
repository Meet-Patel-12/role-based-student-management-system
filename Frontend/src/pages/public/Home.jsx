import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Student Management System
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
            A secure platform for managing students with role-based access,
            approvals, and real-time dashboards.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg
                         hover:bg-blue-700 transition">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg
                         border border-blue-600 hover:bg-blue-50 transition">
              Register as Student
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <FeatureCard
            title="Role-Based Access"
            description="Separate dashboards for Admin and Students with full security."
          />
          <FeatureCard
            title="Admin Approval System"
            description="Students require admin approval before accessing the system."
          />
          <FeatureCard
            title="Modern Dashboard"
            description="Clean UI with pagination, search, and real-time updates."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Student Management System
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow border text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default Home;
