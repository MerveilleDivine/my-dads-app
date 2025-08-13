export default function Pagination({ currentPage, totalPages, onPageChange }: 
  { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  return (
    <div className="flex justify-center gap-3 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span className="px-4 py-1">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
