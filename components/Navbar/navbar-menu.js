import React from 'react'

export default function NavbarMenu(){
    return(
        <div className="col-span-7">
        <ul className="flex">
          <li><a href="#" className="px-4 active">Home</a></li>
          <li><a href="#" className="px-4">Careers</a></li>
          <li><a href="#" className="px-4">Services</a></li>
          <li><a href="#" className="px-4">About</a></li>
          <li><a href="#" className="px-4">Blogs</a></li>
        </ul>
    </div>
    );
}