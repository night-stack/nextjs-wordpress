import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function useOutsideAlerter(langRef, contactRef, setLang, setContact) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLang(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setContact(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langRef, contactRef]);
}

const Drawer = ({ show, setShow }) => {
  const { locale, locales, asPath, route } = useRouter();
  const [lang, setLang] = useState(false);
  const [contact, setContact] = useState(false);
  const langRef = useRef(null);
  const contactRef = useRef(null);

  const outsideClick = () => {
    setLang(false);
    setContact(false);
  };

  useOutsideAlerter(langRef, contactRef, setLang, setContact);

  return (
    <div>
      <div
        id="backdrop"
        onClick={() => setShow(false)}
        className={show ? "open" : "close"}
      />

      <nav id="drawer" className={show ? "open" : "close"}>
        <div className="flex items-center justify-between" ref={langRef}>
          <div
            className="flex cursor-pointer items-center"
            onClick={() => setLang(!lang)}
          >
            <div className="w-6 h-6">
              <img src="/img/globe.png" />
            </div>
            <span className="px-2 capitalize font-bold">{locale}</span>
          </div>
          <div
            className={`z-40 ${
              lang ? "block" : "hidden"
            } w-auto text-base list-none bg-witech-dark-blue text-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-8 left-13`}
          >
            <ul className="font-normal uppercase text-center">
              {locales.map((l, i) => (
                <li key={i}>
                  <Link href={`${asPath}`} locale={l}>
                    <a
                      onClick={outsideClick}
                      className="block py-2 px-4 text-sm hover:bg-witech-blue dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      rel="noopener"
                    >
                      {l}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button type="button" onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          className="w-full items-center flex text-witech-dark-blue bg-witech-link justify-center mt-7.5"
          style={{ minWidth: "140px", height: "45px" }}
        >
          <div className="flex w-full" ref={contactRef}>
            <button
              type="button"
              className="flex justify-center items-center py-2 px-7 w-full font-bold border-0 outline-none text-sm"
              onClick={() => setContact(!contact)}
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

            <div
              className={`z-40 ${
                contact ? "block" : "hidden"
              } w-[247px] text-base list-none bg-witech-dark-blue text-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-[21.5%]`}
            >
              <ul className="font-normal">
                <li>
                  <a
                    target="_blank"
                    href="tel:02111234567"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={outsideClick}
                    rel="noopener"
                  >
                    Phone Number
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="mailto:halo@witech.co.id"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={outsideClick}
                    rel="noopener"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=628116006700&text=Hi%20Witech%20Enterprise!%0AI%20want%20to%20discuss%20something."
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={outsideClick}
                    rel="noopener"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/witechenterprise/"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={outsideClick}
                    rel="noopener"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/witech.enterprise"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    onClick={outsideClick}
                    rel="noopener"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul className="flex flex-col">
          <li className="nav-link">
            <Link href="/" locale={locale}>
              <a
                rel="noopener"
                className={route === "/" ? "px-4 active" : "px-4"}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25 13V27H7V13" strokeLinejoin="round" />
                  <path
                    d="M5 15L16 5L27 15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M19 18H13V27H19V18Z" strokeLinejoin="round" />
                </svg>
                {locale === "en" ? "Home" : "Beranda"}
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/careers" locale={locale}>
              <a rel="noopener" className="px-4">
                <svg
                  className="h-6 w-6 mr-2"
                  stroke="#000"
                  viewBox="0 0 32 32"
                  fill="none"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 9H5V27H27V9Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 5H11V9H21V5Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 16H27"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 16H13"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path d="M17 14H15V18H17V14Z" fill="#000" strokeWidth={2} />
                </svg>
                {locale === "en" ? "Careers" : "Karir"}
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#services" locale={locale}>
              <a rel="noopener" className="px-4">
                <svg
                  className="h-6 w-6 mr-2"
                  stroke="#000"
                  viewBox="0 0 32 32"
                  fill="none"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 27C10.6 25.8 6.5 21.4 5.9 15.9L5 9C6.9 9 8.7 8.1 9.8 6.6L11 5H16H21L21.9 5.9C23.2 7.2 25.1 8 27 8L26.1 15.8C25.4 21.3 21.4 25.8 16 27Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15L15 18L21 12"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </svg>
                {locale === "en" ? "Services" : "Layanan"}
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/about" locale={locale}>
              <a
                rel="noopener"
                className={route === "/about" ? "px-4 active" : "px-4"}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  stroke="#000"
                  viewBox="0 0 32 32"
                  fill="none"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 16C27 19.2 25.6 22.1 23.5 24.1C21.5 25.9 18.9 27 16 27C13.1 27 10.5 25.9 8.5 24.1C6.4 22.1 5 19.2 5 16C5 9.9 9.9 5 16 5C22.1 5 27 9.9 27 16Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.5 24.1C21.5 25.9 18.9 27 16 27C13.1 27 10.5 25.9 8.5 24.1C9.7 21.1 12.6 19 16 19C19.4 19 22.3 21.1 23.5 24.1Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </svg>
                {locale === "en" ? "About" : "Tentang"}
              </a>
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/blogs" locale={locale}>
              <a
                rel="noopener"
                className={route === "/blogs" ? "px-4 active" : "px-4"}
              >
                <svg
                  className="h-6 w-6 mr-2"
                  stroke="#000"
                  viewBox="0 0 32 32"
                  fill="none"
                  strokeWidth={2}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 5H5V27H27V5Z"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10H21"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 15H21"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 20H18"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </svg>
                {locale === "en" ? "Blogs" : "Artikel"}
              </a>
            </Link>
          </li>
        </ul>

        <div className="flex mt-auto">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/witechenterprise/"
          >
            <img className="pr-3" src="/svg/instagram.svg" />
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/witech.enterprise"
          >
            <img className="pr-3" src="/svg/facebook.svg" />
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://twitter.com/witech_co"
          >
            <img className="pr-3" src="/svg/twitter.svg" />
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/company/pt-witech-inovasi-indonesia/about/"
          >
            <img src="/svg/linkedin.svg" />
          </a>
        </div>
        <div className="flex mt-5 text-[11px] font-bold">
          <a
            rel="noopener"
            target="_blank"
            href="https://witech.co.id/terms-conditions/"
            className="pr-3 hover:underline"
          >
            {locale === "en" ? "Terms & Conditions" : "Syarat & Ketentuan"}
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://witech.co.id/privacy-policy/"
            className="hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Drawer;
