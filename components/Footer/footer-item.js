import React from "react";

export default function FooterItem() {
  return (
    <div className="flex text-sm font-bold justify-between items-center mt-28 mb-12">
      <h1>Copyright © 2021, Witech Enterprise</h1>
      <div className="flex pr-36">
        <a
          target="_blank"
          href="https://witech.co.id/about-us/"
          className="px-2"
        >
          About Us
        </a>
        <a
          target="_blank"
          href="https://witech.co.id/terms-conditions/"
          className="px-2"
        >
          Terms & Conditions
        </a>
        <a
          target="_blank"
          href="https://witech.co.id/privacy-policy/"
          className="px-2"
        >
          Privacy Policy
        </a>
        <a
          target="_blank"
          href="https://witech.co.id/disclaimer/"
          className="px-2"
        >
          Disclimer
        </a>
      </div>
      <div className="flex">
        <a target="_blank" href="https://www.instagram.com/witechenterprise/">
          <img className="px-2" src="/svg/instagram.svg"></img>
        </a>
        <a target="_blank" href="https://www.facebook.com/witech.enterprise">
          <img className="px-2" src="/svg/facebook.svg"></img>
        </a>
        <a target="_blank" href="https://twitter.com/witech_co">
          <img className="px-2" src="/svg/twitter.svg"></img>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/pt-witech-inovasi-indonesia/about/"
        >
          <img className="px-2" src="/svg/linkedin.svg"></img>
        </a>
      </div>
    </div>
  );
}
