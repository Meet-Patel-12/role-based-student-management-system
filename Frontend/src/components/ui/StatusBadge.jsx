const StatusBadge = ({ status = "pending" }) => {
  const styles = {
    approved: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    rejected: "bg-red-100 text-red-700",
  };

  const normalizedStatus = status.toLowerCase();

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium
      ${styles[normalizedStatus] || "bg-gray-100 text-gray-700"}`}>
      {normalizedStatus}
    </span>
  );
};

export default StatusBadge;
