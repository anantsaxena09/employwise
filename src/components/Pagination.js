import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return React.createElement("div", { className: "flex justify-center space-x-2 mt-4" },
        Array.from({ length: totalPages }, (_, i) =>
            React.createElement("button", {
                key: i + 1,
                className: `px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-600"}`,
                onClick: () => onPageChange(i + 1)
            }, i + 1)
        )
    );
}

export default Pagination;
