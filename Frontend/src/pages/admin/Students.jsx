import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../../components/ui/PageTransition";
import DataTable from "../../components/ui/DataTable";
import SearchInput from "../../components/ui/SearchInput";
import Pagination from "../../components/ui/Pagination";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { fetchStudents } from "../../api/student.api";
import useDebounce from "../../hooks/useDebounce";

const Students = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 500);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchStudents({
        page,
        search: debouncedSearch,
      });

      setStudents(data.students);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [page, debouncedSearch]);

  return (
    <PageTransition>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Students
        </h1>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search students..."
        />
      </div>

      <ErrorMessage message={error} />

      {loading ? (
        <Loader text="Loading students..." />
      ) : (
        <>
          <DataTable
            data={students}
            onRowClick={(id) => navigate(`/admin/students/${id}`)}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </PageTransition>
  );
};

export default Students;
