import React, { useState, useRef, useCallback, useEffect } from 'react';

const PaginationWrapper = ({
  data,
  itemsPerPage,
  children
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({
        length: totalPages
      }, (_, index) => index + 1);
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
  return /*#__PURE__*/React.createElement("div", null, children(paginatedData), totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-4 p-4 font-sans md:flex-row md:justify-between w-full ring-1 ring-gray-900/10 dark:bg-gray-900 shadow-md rounfed-4xl shadow-gray-900/10"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400 w-full"
  }, "Showing ", currentPage * itemsPerPage - itemsPerPage + 1, " to", " ", Math.min(currentPage * itemsPerPage, data.length), " of ", data.length), /*#__PURE__*/React.createElement("div", {
    className: "flex  justify-center gap-2 w-full"
  }, /*#__PURE__*/React.createElement("button", {
    className: `inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-700"}`,
    onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
    disabled: currentPage === 1,
    "aria-label": "Previous page"
  }, "\u25C0"), getPageNumbers().map((page, index) => /*#__PURE__*/React.createElement("button", {
    key: index,
    className: `flex items-center justify-center p-1 px-2 w-8 h-8 text-sm font-medium border rounded-md ${currentPage === page ? "text-white bg-blue-600 border-blue-600" : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"} ${page === "..." ? "opacity-50 cursor-not-allowed" : ""}`,
    onClick: () => typeof page === "number" && setCurrentPage(page),
    disabled: page === "..."
  }, page)), /*#__PURE__*/React.createElement("button", {
    className: `inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-gray-700"}`,
    onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
    disabled: currentPage === totalPages,
    "aria-label": "Next page"
  }, "\u25B6"))));
};

function DynamicModalButton({
  children,
  className = "bg-gradient-to-r from-emerald-200 to-teal-400 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-slate-800 hover:dark:to-gray-700 dark:text-gray-400",
  buttonText = "Add New",
  modalClassName = "backdrop-blur-xl shadow-md shadow-black/10 bg-emerald-50 dark:bg-gray-800 rounded-xl"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const onDismiss = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onClick = useCallback(e => {
    if (e.target === overlay.current || e.target === wrapper.current) {
      onDismiss();
    }
  }, [onDismiss]);
  const onKeyDown = useCallback(e => {
    if (e.key === "Escape") onDismiss();
  }, [onDismiss]);
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: `${className} p-1 px-4 rounded-full`,
    onClick: () => setIsOpen(true)
  }, buttonText), isOpen && /*#__PURE__*/React.createElement("div", {
    ref: overlay,
    className: "fixed z-50 h-screen w-screen top-0 left-0 bg-black/40 backdrop-blur-sm flex justify-center items-center",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    ref: wrapper,
    className: "flex justify-center items-center h-full w-full overflow-y-scroll mx-auto my-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: modalClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, {
    isOpen,
    setIsOpen
  }) : children || null))))));
}

function Table({
  columns,
  data,
  actions,
  tableClass = "",
  thClass = "",
  tdClass = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    className: `w-full ${tableClass}`
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-gray-50 dark:bg-gray-700"
  }, columns.map((col, index) => /*#__PURE__*/React.createElement("th", {
    key: index,
    className: `px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 ${thClass}`
  }, col.label)), actions && /*#__PURE__*/React.createElement("th", {
    className: `px-6 py-4 ${thClass}`
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-200 dark:divide-gray-700"
  }, data.map((row, rowIndex) => /*#__PURE__*/React.createElement("tr", {
    key: rowIndex,
    className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
  }, columns.map((col, colIndex) => /*#__PURE__*/React.createElement("td", {
    key: colIndex,
    className: `px-6 py-4 text-sm text-gray-500 dark:text-gray-300 ${tdClass}`
  }, row[col.key] || "-")), actions && /*#__PURE__*/React.createElement("td", {
    className: `px-6 py-4 ${tdClass}`
  }, actions(row)))))));
}

export { DynamicModalButton, Table as ModernTable, PaginationWrapper };
