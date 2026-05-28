const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-gray-600 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default Loader;
