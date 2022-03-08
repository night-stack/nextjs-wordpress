import React from "react";
import DropdownLink from "../DropdownLink";
import NavbarMenu from "./navbar-menu";
export default function Navbar() { 
  const contacts = [
    {name : "Phone Number",
    link : "#"
  },
    {name : "Email",
    link : "#"
  },
    {name : "Whatsapp",
    link : "#"
  },
    {name : "Instagram",
    link : "#"
  },
    {name : "Facebook",
    link : "#"
  }
  ]
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
              <div className="ml-8 items-center flex text-black bg-witech-link" style={{width:"140px",height:"45px"}}>
                <div className="pl-8">
                  <DropdownLink title={"Contact"} datas={contacts}></DropdownLink>
                </div>     
              </div>             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
