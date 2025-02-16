import React from "react";

function Table({
  columns,
  data,
  actions,
  tableClass = "",
  thClass = "",
  tdClass = "",
}) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className={`w-full ${tableClass}`}>
        {/* Table Head */}
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 ${thClass}`}
              >
                {col.label}
              </th>
            ))}
            {actions && <th className={`px-6 py-4 ${thClass}`}>Actions</th>}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
            >
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 text-sm text-gray-500 dark:text-gray-300 ${tdClass}`}
                >
                  {row[col.key] || "-"}
                </td>
              ))}
              {actions && (
                <td className={`px-6 py-4 ${tdClass}`}>{actions(row)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
