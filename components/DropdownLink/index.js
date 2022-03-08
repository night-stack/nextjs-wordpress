import React, { useState } from "react";

const DropdownLink = ({ title, datas }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex">
      <button
        type="button"
        class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-bold md:border-0 md:hover:text-gray-700 md:p-0 md:w-auto outline-none text-sm"
        onClick={() => setShow(!show)}
      >
        {title}
        <svg
          class="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div
        class={`${
          show ? "block" : "hidden"
        } z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-12`}
        style={{ right: "7.65%" }}
      >
        <ul class="py-1">
          {datas.map((data, index) => (
            <li key={index}>
              <a
                target="_blank"
                href={data.link}
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
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
