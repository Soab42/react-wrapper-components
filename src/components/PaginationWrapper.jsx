"use client";

import React, { useState } from "react";

const PaginationWrapper = ({ data, itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    const pages = [1];
    if (currentPage > 3) pages.push("...");
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  return (
    <div>
      {children(paginatedData)}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-4 p-4 font-sans md:flex-row md:justify-between w-full ring-1 ring-gray-900/10 dark:bg-gray-900 shadow-md rounfed-4xl shadow-gray-900/10">
          <p className="text-sm text-gray-600 dark:text-gray-400 w-full">
            Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}
          </p>
          <div className="flex  justify-center gap-2 w-full">
            <button
              className={`inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-gray-700"
              }`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ◀
            </button>

            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                className={`flex items-center justify-center p-1 px-2 w-8 h-8 text-sm font-medium border rounded-md ${
                  currentPage === page
                    ? "text-white bg-blue-600 border-blue-600"
                    : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                } ${page === "..." ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}

            <button
              className={`inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-gray-700"
              }`}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginationWrapper;
