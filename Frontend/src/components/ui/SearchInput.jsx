const SearchInput = ({ value = "", onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-64 border px-4 py-2 rounded
                 text-sm focus:outline-none focus:ring
                 placeholder:text-gray-400"
    />
  );
};

export default SearchInput;
