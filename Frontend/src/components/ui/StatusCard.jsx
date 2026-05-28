const StatusCard = ({ status = "pending" }) => {
  const styles = {
    approved: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    rejected: "bg-red-100 text-red-700",
  };

  const normalizedStatus = status.toLowerCase();

  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <p className="text-sm text-gray-500 mb-2">Account Status</p>
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium
        ${styles[normalizedStatus] || "bg-gray-100 text-gray-700"}`}>
        {normalizedStatus}
      </span>
    </div>
  );
};

export default StatusCard;
