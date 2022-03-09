import React from "react";

const CustomDots = ({ data, onClick, active }) => {
  return (
    <div
      className="w-full mx-auto flex justify-center"
      style={{
        position: "relative",
        top: -55,
      }}
    >
      {data.map((val) => (
        <div
          key={val.id}
          className="mx-2.5 custom-dots cursor-pointer"
          onClick={() => onClick(val.id)}
        >
          <div
            className="p-5 bg-hero-dots"
            style={{
              maxWidth: "178px",
            }}
          >
            <img
              src={val.image}
              alt={`logo-${val.id}`}
              height={30}
              width={30}
              className="mb-7"
            />
            <div className="font-bold text-base text-white">{val.title}</div>
            <hr className="custom-separator" />
            <div className="text-white text-sm font-medium">{val.heroText}</div>
          </div>
          <div
            className={`progress-bar ${val.id === active ? "active" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomDots;
