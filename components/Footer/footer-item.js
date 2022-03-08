import React from "react"

export default function FooterItem(){
    return(
    <div className="flex text-sm font-bold justify-between items-center mt-28 mb-12">
            <h1>Copyright © 2021, Witech Enterprise</h1>       
        <div className="flex pr-36">
            <h1 className="px-2">About Us</h1>
            <h1 className="px-2">Terms & Conditions</h1>
            <h1 className="px-2">Privacy Policy</h1>
            <h1 className="px-2">Desclimer</h1>
        </div>
        <div className="flex">
            <img className="px-2" src="/svg/instagram.svg"></img>
            <img className="px-2" src="/svg/facebook.svg"></img>
            <img className="px-2" src="/svg/twitter.svg"></img>
            <img className="px-2"src="/svg/linkedin.svg"></img>
        </div>
    </div>
    );
}