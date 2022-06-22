import React from "react";

const Pagination = ({ posts, currentPage, handleNext, handlePrev }) => {
  const count = posts?.length;

  return (
    <>
      <nav className="flex text-black">
        {currentPage !== 1 && (
          <button
            onClick={handlePrev}
            type="button"
            className="flex items-center justify-center w-13 h-13 mx-1 bg-pagination text-xs hover:bg-witech-blue group"
          >
            <svg
              className="h-4 w-4 fill-black group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* <button className="bg-witech-blue text-white flex items-center justify-center w-13 h-13 text-xs mx-1 font-semibold">
          1
        </button>
        <button className="bg-pagination hover:bg-witech-blue hover:text-white flex items-center justify-center w-13 h-13 text-xs mx-1 font-semibold">
          2
        </button>
        <button className="bg-pagination hover:bg-witech-blue hover:text-white flex items-center justify-center w-13 h-13 text-xs mx-1 font-semibold">
          3
        </button>
        <button className="bg-pagination hover:bg-witech-blue hover:text-white flex items-center justify-center w-13 h-13 text-xs mx-1 font-semibold">
          4
        </button>
        <span className="relative inline-flex items-center justify-center w-13 h-13 bg-pagination text-xs mx-1 font-semibold">
          ...
        </span>
        <button className="bg-pagination hover:bg-witech-blue hover:text-white flex items-center justify-center w-13 h-13 text-xs mx-1 font-semibold">
          52
        </button> */}
        {count === 9 && (
          <button
            type="button"
            className="flex items-center justify-center w-13 h-13 bg-pagination text-xs hover:bg-witech-blue mx-1 font-semibold group"
            onClick={handleNext}
          >
            <svg
              className="h-4 w-4 fill-black group-hover:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </nav>
    </>
  );
};

export default Pagination;
