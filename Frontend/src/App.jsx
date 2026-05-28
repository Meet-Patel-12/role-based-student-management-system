import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";
import WaitingApproval from "./pages/public/WaitingApproval";
import Unauthorized from "./pages/errors/Unauthorized";
import NotFound from "./pages/errors/NotFound";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import Approvals from "./pages/admin/Approvals";
import StudentDashboard from "./pages/student/StudentDashboard";
import Profile from "./pages/student/Profile";

import { ROLES } from "./utils/constants";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}>
        {/* 🌍 Public Routes */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/waiting-approval"
          element={<WaitingApproval />}
        />
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        {/* 🔐 Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />
            <Route
              path="/admin/students"
              element={<Students />}
            />
            <Route
              path="/admin/approvals"
              element={<Approvals />}
            />
          </Route>
        </Route>

        {/* 🎓 Student Routes */}
        <Route element={<ProtectedRoute allowedRoles={[ROLES.STUDENT]} />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/student/dashboard"
              element={<StudentDashboard />}
            />
            <Route
              path="/student/profile"
              element={<Profile />}
            />
          </Route>
        </Route>

        {/* ❌ 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
