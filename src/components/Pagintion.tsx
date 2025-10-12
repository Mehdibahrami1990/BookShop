"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagintion = ({ pageCount }: { pageCount: number }) => {
  const router = useRouter();

  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    router.push(`/store?page=${page}&per_page=3`);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        className="flex justify-center gap-6 mt-9 cursor-pointer"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagintion;
