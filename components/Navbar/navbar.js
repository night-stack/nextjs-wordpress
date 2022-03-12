import React, { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="bg-witech-dark-blue text-white text-sm font-bold">
        <div className="flex items-center py-4 container mx-auto px-25">
          <a href="/">
            <img src="/img/logo.png" className="h-12 w-12" />
          </a>
          <ul className="flex ml-5">
            <li className="nav-link">
              <a
                href="/"
                className={router?.route === "/" ? "px-4 active" : "px-4"}
              >
                Home
              </a>
            </li>
            <li className="nav-link">
              <a href="#" className="px-4">
                Careers
              </a>
            </li>
            <li className="nav-link">
              <a href="#services" className="px-4">
                Services
              </a>
            </li>
            <li className="nav-link">
              <a
                href="/about"
                className={router?.route === "/about" ? "px-4 active" : "px-4"}
              >
                About
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#"
                className={router?.route === "/blogs" ? "px-4 active" : "px-4"}
              >
                Blogs
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between ml-auto">
            <div className="flex items-center">
              <a className="w-6 h-6">
                <img src="/img/globe.png" />
              </a>
              <a className="px-2">En</a>
            </div>
            <div
              className="ml-8 items-center flex text-witech-dark-blue bg-witech-link justify-center"
              style={{ minWidth: "140px", height: "45px" }}
            >
              <div className="flex w-full">
                <button
                  type="button"
                  className="flex justify-between items-center py-2 px-7 w-full font-bold border-0 outline-none text-sm"
                  onClick={() => setShow(!show)}
                >
                  Contact
                  <svg
                    className="h-5 mr-0 fill-witech-dark-blue"
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
                  } z-10 w-44 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-12 right-lg md:right-md-menu`}
                >
                  <ul className="py-1 font-normal">
                    <li>
                      <a
                        target="_blank"
                        href="tel:02111234567"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Phone Number
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="mailto:halo@witech.co.id"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=628116006700&text=Hi%20Witech%20Enterprise!%0AI%20want%20to%20discuss%20something."
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/witechenterprise/"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/witech.enterprise"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
