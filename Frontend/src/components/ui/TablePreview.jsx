const TablePreview = ({ data = [] }) => {
  if (data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border text-center text-gray-500 mt-6">
        No recent records
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border mt-6 overflow-x-auto">
      <div className="p-4 border-b font-semibold text-gray-700">
        Recent Students
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium
                  ${
                    item.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : item.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePreview;
