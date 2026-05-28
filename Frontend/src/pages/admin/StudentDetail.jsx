import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../../components/ui/PageTransition";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";
import StatusBadge from "../../components/ui/StatusBadge";
import api from "../../api/axios";

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStudent = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get(`/students/${id}`);
      setStudent(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load student details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

  if (loading) {
    return <Loader text="Loading student details..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!student) return null;

  return (
    <PageTransition>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Student Details</h1>
        <button
          onClick={() => navigate(-1)}
          className="border px-4 py-2 rounded hover:bg-gray-100">
          Back
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-lg shadow border p-6 max-w-2xl">
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Name</span>
            <span className="font-medium">{student.name}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Email</span>
            <span className="font-medium">{student.email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Role</span>
            <span className="font-medium capitalize">{student.role}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-500">Status</span>
            <StatusBadge status={student.status} />
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Created At</span>
            <span className="font-medium">
              {new Date(student.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StudentDetail;
