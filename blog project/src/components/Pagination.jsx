import React from "react";

const Pagination = ({ onpagechange, currentpage, blogs, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);
  const renderPagination = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNum) => (
        <li
          className={pageNum === currentpage ? "activePagination" : ""}
          key={pageNum}
        >
          <a onClick={() => onpagechange(pageNum)} href="#">
            {pageNum}
          </a>
        </li>
      )
    );
  };
  return (
    <div>
      <ul className="pagination my-8 flex-wrap gap-4" >
        <li>
          <button
            className="px-3 py-1 border"
            onClick={() => onpagechange(currentpage - 1)}
            disabled={currentpage === 1}
          >
            previous
          </button>
        </li>
        <div className="flex gap-1">{renderPagination()}</div>
        <li>
          <button
            className="px-3 py-1 border"
            onClick={() => onpagechange(currentpage + 1)}
            disabled={currentpage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
