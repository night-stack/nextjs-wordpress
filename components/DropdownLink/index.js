import React, { useState, useRef, useEffect } from "react";

function useOutsideAlerter(ref, handle) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handle(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const DropdownLink = ({ title, datas }) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setShow);

  return (
    <div className="flex sosmed-dropdown" ref={wrapperRef}>
      <button
        type="button"
        className="flex justify-between items-center py-2 w-full font-bold border-0 outline-none text-sm"
        onClick={() => setShow(!show)}
      >
        {title}

        <svg
          className="h-5 ml-2.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${
          show ? "block" : "hidden"
        } z-10 w-44 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-10 md:right-md right-lg`}
      >
        <ul>
          {datas.map((data, index) => (
            <li key={index}>
              <a
                rel="noopener"
                target="_blank"
                href={`
                ${data.id === "phone" ? "tel:" : ""} ${
                  data.id === "email" ? "mailto:" : ""
                } ${data.link}
                `}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownLink;
