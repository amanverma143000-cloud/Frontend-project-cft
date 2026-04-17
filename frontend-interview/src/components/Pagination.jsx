import React from "react";

const Pagination = ({ total, perPage, currentPage, setPage }) => {
  const pages = Math.ceil((total || 0) / perPage);

  return (
    <div className="pagination">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;