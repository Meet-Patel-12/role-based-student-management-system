const DataTable = ({ data = [] }) => {
  if (data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border text-center text-gray-500">
        No records found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th
              scope="col"
              className="p-3 text-left">
              Name
            </th>
            <th
              scope="col"
              className="p-3 text-left">
              Email
            </th>
            <th
              scope="col"
              className="p-3 text-left">
              Role
            </th>
            <th
              scope="col"
              className="p-3 text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className="border-t">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.email}</td>
              <td className="p-3 capitalize">{item.role}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
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

export default DataTable;
