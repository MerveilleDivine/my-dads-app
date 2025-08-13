interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 disabled:opacity-50"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300 disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
}
