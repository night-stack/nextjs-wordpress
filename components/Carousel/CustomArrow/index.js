import React from "react";

export const ArrowRight = ({ onClick, ...rest }) => {
  return (
    <button
      className="flex items-center bg-witech-link absolute rounded-full z-10 justify-center"
      style={{ width: 50, height: 50, right: 0, outline: "none" }}
      onClick={() => onClick()}
    >
      <img src="/svg/arrow-right.svg" height={24} width={24} />
    </button>
  );
};

export const ArrowLeft = ({ onClick, ...rest }) => {
  return (
    <button
      className="flex items-center bg-witech-link absolute rounded-full z-10 justify-center"
      style={{ width: 50, height: 50, left: 0, outline: "none" }}
      onClick={() => onClick()}
    >
      <img src="/svg/arrow-left.svg" height={24} width={24} />
    </button>
  );
};
