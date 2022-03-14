import React from "react";
import Link from "next/link";

const FooterItem = ({ locale }) => {
  return (
    <div className="flex text-sm font-bold items-center mt-28 mb-12">
      <h1>Copyright © 2021, Witech Enterprise</h1>
      <div className="flex ml-13">
        <Link href="about" locale={locale}>
          <a className="px-2 hover:text-gray-700">
            {locale === "en" ? "About Us" : "Tentang Kami"}
          </a>
        </Link>
        <a
          target="_blank"
          href="https://witech.co.id/terms-conditions/"
          className="px-2 hover:text-gray-700"
        >
          {locale === "en" ? "Terms & Conditions" : "Syarat & Ketentuan"}
        </a>
        <a
          target="_blank"
          href="https://witech.co.id/privacy-policy/"
          className="px-2 hover:text-gray-700"
        >
          Privacy Policy
        </a>
        <a
          target="_blank"
          href="https://witech.co.id/disclaimer/"
          className="px-2 hover:text-gray-700"
        >
          Disclimer
        </a>
      </div>
      <div className="flex ml-auto">
        <a target="_blank" href="https://www.instagram.com/witechenterprise/">
          <img className="px-2" src="/svg/instagram.svg" />
        </a>
        <a target="_blank" href="https://www.facebook.com/witech.enterprise">
          <img className="px-2" src="/svg/facebook.svg" />
        </a>
        <a target="_blank" href="https://twitter.com/witech_co">
          <img className="px-2" src="/svg/twitter.svg" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/pt-witech-inovasi-indonesia/about/"
        >
          <img className="px-2" src="/svg/linkedin.svg" />
        </a>
      </div>
    </div>
  );
};

export default FooterItem;
