import React from "react";
import FooterItem from "./footer-item";

import { useRouter } from "next/router";

export default function Footer() {
  const { locale } = useRouter();

  return (
    <>
      <div className="flex font-bold my-20">
        <div
          className="flex w-full"
          style={{
            maxWidth: 345,
          }}
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src="/img/logo-witech-footer.png"
          />
          <div className="text-sm ml-4">
            <h1 className="text-base">PT. Witech Inovasi Indonesia</h1>
            <h1 className="text-sm">Some of tagline words</h1>
          </div>
        </div>
        <div className="w-1/4 text-lg">
          <h1>{locale === "en" ? "Contact" : "Kontak"}</h1>
          <div className="flex items-center py-3">
            <div className="img-contact-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h1 className="pl-4 font-normal">(021) - 11234567</h1>
          </div>
          <div className="flex items-center py-1">
            <div className="img-contact-footer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="pl-4 font-normal">halo@witech.co.id</h1>
          </div>
        </div>
        <div className="w-1/4 text-lg">
          <h1 className="pb-3">{locale === "en" ? "Location" : "Lokasi"}</h1>
          <h1 className="font-normal">
            Jl. Multatuli No. 8A Hamdan, Medan, Sumatera Utara 20212, Indonesia
          </h1>
        </div>
        <div className="ml-auto">
          <img width={104} height={33} src="/img/oddo-logo-footer.png" />
          <h1 className="text-sm mt-2">Partner</h1>
        </div>
      </div>
      <FooterItem locale={locale} />
    </>
  );
}
