'use strict';

var React = require('react');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var PaginationWrapper = function PaginationWrapper(_ref) {
  var data = _ref.data,
    itemsPerPage = _ref.itemsPerPage,
    children = _ref.children;
  var _useState = React.useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var totalPages = Math.ceil(data.length / itemsPerPage);
  var paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  var getPageNumbers = function getPageNumbers() {
    if (totalPages <= 5) {
      return Array.from({
        length: totalPages
      }, function (_, index) {
        return index + 1;
      });
    }
    var pages = [1];
    if (currentPage > 3) pages.push("...");
    var startPage = Math.max(2, currentPage - 1);
    var endPage = Math.min(totalPages - 1, currentPage + 1);
    for (var i = startPage; i <= endPage; i++) pages.push(i);
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
    className: "inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ".concat(currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-gray-700"),
    onClick: function onClick() {
      return setCurrentPage(function (prev) {
        return Math.max(prev - 1, 1);
      });
    },
    disabled: currentPage === 1,
    "aria-label": "Previous page"
  }, "\u25C0"), getPageNumbers().map(function (page, index) {
    return /*#__PURE__*/React.createElement("button", {
      key: index,
      className: "flex items-center justify-center p-1 px-2 w-8 h-8 text-sm font-medium border rounded-md ".concat(currentPage === page ? "text-white bg-blue-600 border-blue-600" : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700", " ").concat(page === "..." ? "opacity-50 cursor-not-allowed" : ""),
      onClick: function onClick() {
        return typeof page === "number" && setCurrentPage(page);
      },
      disabled: page === "..."
    }, page);
  }), /*#__PURE__*/React.createElement("button", {
    className: "inline-flex items-center justify-center w-8 h-8 px-2 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 ".concat(currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-gray-700"),
    onClick: function onClick() {
      return setCurrentPage(function (prev) {
        return Math.min(prev + 1, totalPages);
      });
    },
    disabled: currentPage === totalPages,
    "aria-label": "Next page"
  }, "\u25B6"))));
};

function DynamicModalButton(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "bg-gradient-to-r from-emerald-200 to-teal-400 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-slate-800 hover:dark:to-gray-700 dark:text-gray-400" : _ref$className,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? "Add New" : _ref$buttonText,
    _ref$modalClassName = _ref.modalClassName,
    modalClassName = _ref$modalClassName === void 0 ? "backdrop-blur-xl shadow-md shadow-black/10 bg-emerald-50 dark:bg-gray-800 rounded-xl" : _ref$modalClassName;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var overlay = React.useRef(null);
  var wrapper = React.useRef(null);
  var onDismiss = React.useCallback(function () {
    setIsOpen(false);
  }, []);
  var onClick = React.useCallback(function (e) {
    if (e.target === overlay.current || e.target === wrapper.current) {
      onDismiss();
    }
  }, [onDismiss]);
  var onKeyDown = React.useCallback(function (e) {
    if (e.key === "Escape") onDismiss();
  }, [onDismiss]);
  React.useEffect(function () {
    document.addEventListener("keydown", onKeyDown);
    return function () {
      return document.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "".concat(className, " p-1 px-4 rounded-full"),
    onClick: function onClick() {
      return setIsOpen(true);
    }
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
    isOpen: isOpen,
    setIsOpen: setIsOpen
  }) : children || null))))));
}

function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    actions = _ref.actions,
    _ref$tableClass = _ref.tableClass,
    tableClass = _ref$tableClass === void 0 ? "" : _ref$tableClass,
    _ref$thClass = _ref.thClass,
    thClass = _ref$thClass === void 0 ? "" : _ref$thClass,
    _ref$tdClass = _ref.tdClass,
    tdClass = _ref$tdClass === void 0 ? "" : _ref$tdClass;
  return /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto rounded-lg shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full ".concat(tableClass)
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-gray-50 dark:bg-gray-700"
  }, columns.map(function (col, index) {
    return /*#__PURE__*/React.createElement("th", {
      key: index,
      className: "px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 ".concat(thClass)
    }, col.label);
  }), actions && /*#__PURE__*/React.createElement("th", {
    className: "px-6 py-4 ".concat(thClass)
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-200 dark:divide-gray-700"
  }, data.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex,
      className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
    }, columns.map(function (col, colIndex) {
      return /*#__PURE__*/React.createElement("td", {
        key: colIndex,
        className: "px-6 py-4 text-sm text-gray-500 dark:text-gray-300 ".concat(tdClass)
      }, row[col.key] || "-");
    }), actions && /*#__PURE__*/React.createElement("td", {
      className: "px-6 py-4 ".concat(tdClass)
    }, actions(row)));
  }))));
}

exports.DynamicModalButton = DynamicModalButton;
exports.ModernTable = Table;
exports.PaginationWrapper = PaginationWrapper;
