import React from "react";

export default function ServicesItem({ data }) {
  return (
    <div
      className="bg-witech-dark-blue w-1/4 mx-2.5 p-5"
      style={{ height: 360 }}
    >
      <div className="img-wrapper mt-7 mb-5">
        <img src={data?.logo} className="left-2 bottom-2 relative" />
      </div>
      <h1 className="text-sm font-bold text-white mb-5">{data?.title}</h1>
      <p className="text-sm text-white" style={{ minHeight: 100, height: 100 }}>
        {data?.desc}
      </p>
      <div className="mt-7 flex mb-9 items-center">
        <h1 className="text-sm text-witech-link ">Contact Us</h1>
        <img className="ml-2.5" src="/img/arrow.png" />
      </div>
    </div>
  );
}
