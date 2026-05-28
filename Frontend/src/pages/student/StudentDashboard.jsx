import { useSelector } from "react-redux";
import InfoCard from "../../components/ui/InfoCard";
import StatusCard from "../../components/ui/StatusCard";
import PageTransition from "../../components/ui/PageTransition";

const StudentDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  // Safe fallback while Redux is resolving
  if (!user) {
    return (
      <PageTransition>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your profile...</p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="p-4 md:p-6 lg:p-8 flex flex-col">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Here's an overview of your account
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <InfoCard
          title="Full Name"
          value={user.name}
        />
        <InfoCard
          title="Email Address"
          value={user.email}
        />
        <InfoCard
          title="Account Type"
          value={
            user.role
              ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
              : "Student"
          }
        />
      </div>

      {/* Status */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Account Status
        </h2>
        <div className="max-w-md">
          <StatusCard status={user.status} />
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
        <div className="flex items-start">
          <svg
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Quick Tips</h3>
            <ul className="mt-2 text-sm text-blue-700 list-disc list-inside space-y-1">
              <li>Keep your profile information up to date</li>
              <li>Check your email regularly for important updates</li>
              <li>Contact admin if you need any assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StudentDashboard;
