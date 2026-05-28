import PageTransition from "../../components/ui/PageTransition";
import StatCard from "../../components/ui/StatCard";
import TablePreview from "../../components/ui/TablePreview";

const AdminDashboard = () => {
  // Dummy data (replace with API later)
  const stats = {
    totalStudents: 120,
    approvedStudents: 90,
    pendingStudents: 30,
    activeUsers: 85,
  };

  const recentStudents = [
    {
      _id: "1",
      name: "Rahul Patel",
      email: "rahul@mail.com",
      status: "approved",
    },
    {
      _id: "2",
      name: "Amit Shah",
      email: "amit@mail.com",
      status: "pending",
    },
    {
      _id: "3",
      name: "Neha Singh",
      email: "neha@mail.com",
      status: "approved",
    },
  ];

  return (
    <PageTransition>
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Overview of system activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          color="text-blue-600"
        />
        <StatCard
          title="Approved Students"
          value={stats.approvedStudents}
          color="text-green-600"
        />
        <StatCard
          title="Pending Approvals"
          value={stats.pendingStudents}
          color="text-yellow-600"
        />
        <StatCard
          title="Active Users"
          value={stats.activeUsers}
          color="text-purple-600"
        />
      </div>

      {/* Recent Activity */}
      <TablePreview data={recentStudents} />
    </PageTransition>
  );
};

export default AdminDashboard;
