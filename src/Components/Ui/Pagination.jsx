import React from "react";

const Pagination = ({ total, limit, skip, onPageChange }) => {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;

  const handlePageClick = (page) => {
    const newSkip = (page - 1) * limit;
    onPageChange(newSkip);
  };

  const getVisiblePages = () => {
    let pages = [];

    if (totalPages <= 4) {
      pages = [...Array(totalPages)].map((_, i) => i + 1);
    } else {
      if (currentPage <= 2) {
        pages = [1, 2, 3];
      } else if (currentPage >= totalPages - 1) {
        pages = [
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ];
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      
      {/* Prev */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border border-gray-400 rounded disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>

      {/* First + dots */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            className="px-3 py-1 border border-gray-400 rounded cursor-pointer"
          >
            1
          </button>
          <span>...</span>
        </>
      )}

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`px-3 py-1 border border-gray-400 rounded cursor-pointer ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Last + dots */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          <span>...</span>
          <button
            onClick={() => handlePageClick(totalPages)}
            className="px-3 py-1 border border-gray-400 rounded cursor-pointer"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border border-gray-400 rounded disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;