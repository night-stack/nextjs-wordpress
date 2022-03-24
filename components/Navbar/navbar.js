import React, { useState } from "react";
import Drawer from "../Drawer";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const { locale, locales, route, asPath } = useRouter();
  const [show, setShow] = useState(false);

  return (
    <>
      <Drawer show={show} setShow={setShow} />
      <nav
        id="navbar"
        className="bg-witech-dark-blue text-white text-sm font-bold"
      >
        <div className="flex items-center py-4 container mx-auto px-25">
          <Link href="/" locale={locale}>
            <a>
              <img src="/img/logo.png" className="h-12 w-12" />
            </a>
          </Link>
          <button
            type="button"
            className="ml-auto hidden menu-button"
            onClick={() => setShow(!show)}
          >
            <svg
              className="stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul className="flex ml-5">
            <li className="nav-link">
              <Link href="/" locale={locale}>
                <a className={route === "/" ? "px-4 active" : "px-4"}>
                  {locale === "en" ? "Home" : "Beranda"}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#" locale={locale}>
                <a className="px-4">{locale === "en" ? "Careers" : "Karir"}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="#services" locale={locale}>
                <a className="px-4">
                  {locale === "en" ? "Services" : "Layanan"}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about" locale={locale}>
                <a className={route === "/about" ? "px-4 active" : "px-4"}>
                  {locale === "en" ? "About" : "Tentang"}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/blogs" locale={locale}>
                <a className={route === "/blogs" ? "px-4 active" : "px-4"}>
                  {locale === "en" ? "Blogs" : "Artikel"}
                </a>
              </Link>
            </li>
          </ul>

          <div className="flex items-center justify-between ml-auto navbar-contact">
            <div className="flex flex-col items-center group">
              <div className="flex cursor-pointer items-center">
                <div className="w-6 h-6">
                  <img src="/img/globe.png" />
                </div>
                <span className="px-2 capitalize">{locale}</span>
              </div>
              <div className="z-10 hidden w-auto text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-6.5 right-lang-lg md:right-lang-md group-hover:block">
                <ul className="font-normal uppercase text-center">
                  {locales.map((l, i) => (
                    <li key={i}>
                      <Link href={`${asPath}`} locale={l}>
                        <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                          {l}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="ml-8 items-center flex text-witech-dark-blue bg-witech-link justify-center"
              style={{ minWidth: "140px", height: "45px" }}
            >
              <div className="flex w-full group">
                <button
                  type="button"
                  className="flex justify-between items-center py-2 px-7 w-full font-bold border-0 outline-none text-sm"
                >
                  {locale === "en" ? "Contact" : "Kontak"}
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

                <div className="z-10 hidden w-35.5 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute mt-9.5 right-lg md:right-md-menu group-hover:block">
                  <ul className="font-normal">
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
