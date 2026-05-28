import { Link } from "react-router-dom";

const WaitingApproval = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow border max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-4 h-14 w-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-2xl">
          ⏳
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Approval Pending
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          Your account has been created successfully. An administrator needs to
          approve your account before you can log in.
        </p>

        {/* Info Box */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm rounded p-3 mb-6">
          This usually takes a short time. Please check back later.
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Go to Login
          </Link>

          <Link
            to="/"
            className="text-blue-600 text-sm hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaitingApproval;
