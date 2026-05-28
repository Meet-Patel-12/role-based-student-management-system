const ProfileField = ({ label = "-", value = "-" }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b last:border-b-0">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-800 break-words text-right max-w-[60%]">
        {value}
      </span>
    </div>
  );
};

export default ProfileField;
