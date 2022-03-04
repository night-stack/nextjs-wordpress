import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-witech-dark-blue text-white">
      <div className="flex">
        <div className="flex justify-around w-full text-sm">
          <div className="flex">
            <img height={50} src="/img/logo.png" className="block px-4 py-5" />
            <a href="#" className="block px-4 py-5">
              Home
            </a>
            <a href="#" className="block px-4 py-5">
              Careers
            </a>
            <a href="#" className="block px-4 py-5">
              Services
            </a>
            <a href="#" className="block px-4 py-5">
              About
            </a>
            <a href="#" className="block px-4 py-5">
              Blogs
            </a>
          </div>
          <div className="flex">
            <div className="flex">
              <a href="#" className="block px-4 py-5">
                Language Logo
              </a>
              <a href="#" className="block px-4 py-5">
                Language
              </a>
            </div>
            <div className="flex">
              <button href="#" className="bg-witech-link px-12 m-2">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
