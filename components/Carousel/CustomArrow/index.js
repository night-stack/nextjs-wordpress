import React from "react";

export const ArrowRight = ({ onClick, ...props }) => {
  const { currentSlide } = props;

  return (
    <button
      className={`flex items-center bg-witech-link absolute rounded-full z-10 justify-center ${
        currentSlide === 3 ? "hidden" : ""
      }`}
      style={{ width: 50, height: 50, right: -15, outline: "none", top: "33%" }}
      onClick={onClick}
    >
      <img src="/svg/arrow-right.svg" height={24} width={24} />
    </button>
  );
};

export const ArrowLeft = ({ onClick, ...props }) => {
  const { currentSlide } = props;

  return (
    <button
      className={`flex items-center bg-witech-link absolute rounded-full z-10 justify-center ${
        currentSlide === 0 ? "hidden" : ""
      }`}
      style={{ width: 50, height: 50, left: -15, outline: "none", top: "33%" }}
      onClick={onClick}
    >
      <img src="/svg/arrow-left.svg" height={24} width={24} />
    </button>
  );
};
