import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber: onPageChange }) => {
  let handlePageChange = (data) => {
    onPageChange(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <style jsx>
        {`
          /* Custom styles for pagination */
          .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            padding: 0;
          }

          .page-item {
            margin: 0;
          }

          .page-link {
            color: black !important;
            background-color: transparent;
            border: none;
            border-radius: 50%;
            padding: 0.3rem 0.6rem;
            margin: 0.1rem;
            cursor: pointer;
            text-decoration: none !important;
          }


          .prev,
          .next {
            background-color: green;
            color: black !important;
            padding: 0.3rem 0.6rem;
            border-radius: 0.25rem;
            margin: 0.1rem;
          }

         
          .active .page-link {
            background-color: green;
          }
        `}
      </style>
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="prev"
        nextClassName="next"
        activeClassName="active"
        marginPagesDisplayed={width < 300 ? 1 : 2}
        pageRangeDisplayed={width < 300 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={handlePageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;
