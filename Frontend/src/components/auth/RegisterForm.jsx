import { useState } from "react";
import { useSelector } from "react-redux";
import { registerRequest } from "../../features/auth/authAPI";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerRequest(formData);

      toast.success("Registration successful! Wait for admin approval.");

      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow border space-y-4 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center">Student Registration</h2>

      {/* Name */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">Password</label>
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-60">
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
