"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagintion = ({ pageCount }: { pageCount: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "2");

    router.push(`/store?${currentSearchParams.toString()}`);
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
