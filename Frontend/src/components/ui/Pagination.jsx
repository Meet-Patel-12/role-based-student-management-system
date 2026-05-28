const Pagination = ({ page = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-end items-center gap-3 mt-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-3 py-1 border rounded text-sm
                   disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>

      <span className="text-sm text-gray-600">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong>
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-3 py-1 border rounded text-sm
                   disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
