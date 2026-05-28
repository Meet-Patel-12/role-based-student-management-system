import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApprovalTable from "../../components/ui/ApprovalTable";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";
import PageTransition from "../../components/ui/PageTransition";
import {
  approveStudent,
  fetchPendingStudents,
  rejectStudent,
} from "../../api/student.api";

const Approvals = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPending = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPendingStudents();
      setStudents(data);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to load approvals";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPending();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveStudent(id);
      toast.success("Student approved. They can now log in.");
      loadPending();
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not approve student");
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectStudent(id);
      toast.warning("Student rejected");
      loadPending();
    } catch (err) {
      toast.error(err.response?.data?.message || "Could not reject student");
    }
  };

  return (
    <PageTransition>
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Pending Approvals</h1>
        <p className="text-gray-500 text-sm">
          Approve or reject newly registered students
        </p>
      </div>

      <ErrorMessage message={error} />

      {loading ? (
        <Loader text="Loading approvals..." />
      ) : (
        <ApprovalTable
          data={students}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}
    </PageTransition>
  );
};

export default Approvals;
