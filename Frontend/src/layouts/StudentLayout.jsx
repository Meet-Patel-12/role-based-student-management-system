import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16 md:ml-64 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
