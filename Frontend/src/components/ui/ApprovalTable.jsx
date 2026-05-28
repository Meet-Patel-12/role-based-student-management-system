import StatusBadge from "./StatusBadge";

const ApprovalTable = ({ data = [], onApprove, onReject }) => {
  if (data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border text-center text-gray-500">
        No pending approvals 🎉
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow border overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr
              key={student._id}
              className="border-t">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">
                <StatusBadge status={student.status} />
              </td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onApprove(student._id)}
                  className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  Approve
                </button>
                <button
                  onClick={() => onReject(student._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalTable;
