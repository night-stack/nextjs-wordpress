import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { locale } = useRouter();

  return (
    <nav
      id="header-post"
      className="fixed py-8 min-h-screen border-r-2 border-neutral-100 top-0 flex flex-col"
      style={{
        width: "7%",
      }}
    >
      <Link href="/" locale={locale}>
        <a className="flex justify-center items-center">
          <img src="/img/logo-witech-footer.png" className="h-10 w-10" />
        </a>
      </Link>
      <div className="flex flex-col justify-center items-center my-auto">
        <Link href="/" locale={locale}>
          <a className="my-4 group flex items-center">
            <svg
              className="h-8 w-8"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#231F20"
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
            <span className="tooltip text-xs ml-10 invisible dark:bg-gray-700 group-hover:visible group-hover:bg-gray-900">
              {locale === "en" ? "Home" : "Beranda"}
              <div className="tooltip-arrow" />
            </span>
          </a>
        </Link>
        <Link href="#" locale={locale}>
          <a className="my-4 group flex items-center">
            <svg
              className="h-8 w-8"
              stroke="#231F20"
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
              <path d="M5 16H13" strokeMiterlimit="10" strokeLinejoin="round" />
              <path d="M17 14H15V18H17V14Z" fill="#231F20" strokeWidth={2} />
            </svg>
            <span className="tooltip text-xs ml-10 invisible dark:bg-gray-700 group-hover:visible group-hover:bg-gray-900">
              {locale === "en" ? "Careers" : "Karir"}
              <div className="tooltip-arrow" />
            </span>
          </a>
        </Link>
        <Link href="#" locale={locale}>
          <a className="my-4 group flex items-center">
            <svg
              className="h-8 w-8"
              stroke="#231F20"
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
            <span className="tooltip text-xs ml-10 invisible dark:bg-gray-700 group-hover:visible group-hover:bg-gray-900">
              {locale === "en" ? "Services" : "Layanan"}
              <div className="tooltip-arrow" />
            </span>
          </a>
        </Link>
        <Link href="/about" locale={locale}>
          <a className="my-4 group flex items-center">
            <svg
              className="h-8 w-8"
              stroke="#231F20"
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
            <span className="tooltip text-xs ml-10 invisible dark:bg-gray-700 group-hover:visible group-hover:bg-gray-900">
              {locale === "en" ? "About" : "Tentang"}
              <div className="tooltip-arrow" />
            </span>
          </a>
        </Link>
        <Link href="#" locale={locale}>
          <a className="my-4 group flex items-center">
            <svg
              className="h-8 w-8"
              stroke="#231F20"
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
              <path d="M9 10H21" strokeMiterlimit="10" strokeLinejoin="round" />
              <path d="M9 15H21" strokeMiterlimit="10" strokeLinejoin="round" />
              <path d="M9 20H18" strokeMiterlimit="10" strokeLinejoin="round" />
            </svg>
            <span className="tooltip text-xs ml-10 invisible dark:bg-gray-700 group-hover:visible group-hover:bg-gray-900">
              {locale === "en" ? "Blogs" : "Artikel"}
              <div className="tooltip-arrow" />
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
