import React from "react";
import DropdownLink from "../DropdownLink";
import NavbarMenu from "./navbar-menu";
export default function Navbar() {
  const contacts = [
    {
      id: "phone",
      name: "Phone Number",
      link: "02111234567",
    },
    {
      id: "email",
      name: "Email",
      link: "halo@witech.co.id",
    },
    {
      id: "wa",
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=628116006700&text=Hi%20Witech%20Enterprise!%0AI%20want%20to%20discuss%20something.",
    },
    {
      id: "ig",
      name: "Instagram",
      link: "https://www.instagram.com/witechenterprise/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/witech.enterprise",
    },
  ];
  return (
    <>
      <nav className="bg-witech-dark-blue text-white text-sm font-bold">
        <div className="grid grid-cols-12 gap-2 items-center py-4">
          <div className="col-span-1 col-start-2">
            <img src="/img/logo.png" className="h-12 w-12"></img>
          </div>
          <NavbarMenu />
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <a className="w-6 h-6">
                  <img src="/img/globe.png" />
                </a>
                <a className="px-2">En</a>
              </div>
              <div
                className="ml-8 items-center flex text-black bg-witech-link"
                style={{ width: "140px", height: "45px" }}
              >
                <div className="pl-8 font-thin">
                  <DropdownLink title={"Contact"} datas={contacts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
