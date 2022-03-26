import React from "react";
import Link from "next/link";
import moment from "moment";

const FooterItem = ({ locale }) => {
  return (
    <div className="flex text-sm font-bold items-center mt-28 mb-12 footer-sosmed">
      <h2 className="footer-font-9">
        Copyright © {moment().year()}, Witech Enterprise
      </h2>
      <div className="flex ml-13">
        <Link href="/about" locale={locale}>
          <a rel="noopener" className="px-2 hover:underline footer-font-9">
            {locale === "en" ? "About Us" : "Tentang Kami"}
          </a>
        </Link>
        <a
          rel="noopener"
          target="_blank"
          href="https://witech.co.id/terms-conditions/"
          className="px-2 hover:underline footer-font-9"
        >
          {locale === "en" ? "Terms & Conditions" : "Syarat & Ketentuan"}
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://witech.co.id/privacy-policy/"
          className="px-2 hover:underline footer-font-9"
        >
          Privacy Policy
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://witech.co.id/disclaimer/"
          className="px-2 hover:underline footer-font-9"
        >
          Disclimer
        </a>
      </div>
      <div className="flex ml-auto">
        <a
          rel="noopener"
          target="_blank"
          href="https://www.instagram.com/witechenterprise/"
        >
          <img
            className="px-2 footer-logo-sosmed-tablet"
            src="/svg/instagram.svg"
          />
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.facebook.com/witech.enterprise"
        >
          <img
            className="px-2 footer-logo-sosmed-tablet"
            src="/svg/facebook.svg"
          />
        </a>
        <a rel="noopener" target="_blank" href="https://twitter.com/witech_co">
          <img
            className="px-2 footer-logo-sosmed-tablet"
            src="/svg/twitter.svg"
          />
        </a>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/company/pt-witech-inovasi-indonesia/about/"
        >
          <img
            className="px-2 footer-logo-sosmed-tablet"
            src="/svg/linkedin.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterItem;
