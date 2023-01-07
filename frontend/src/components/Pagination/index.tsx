import React from "react";
import "./styles.css";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

function Pagination({ setPage, page }: PaginationProps) {
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        &lt;
      </button>
      <button>{page}</button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        &gt;
      </button>
    </div>
  );
}
export { Pagination };