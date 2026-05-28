const InfoCard = ({ title = "-", value = "-" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border">
      <p className="text-sm text-gray-500 truncate">{title}</p>
      <p className="text-lg font-semibold mt-1 break-words">{value}</p>
    </div>
  );
};

export default InfoCard;
