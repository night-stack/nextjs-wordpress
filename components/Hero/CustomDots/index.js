import React, { useEffect, useState, useRef } from "react";

const CustomDots = ({ data, onClick, activeSlide }) => {
  const [scale, setScale] = useState(1);
  const scaleUpRef = useRef();

  useEffect(() => {
    scaleUpRef.current = startProgress ?? null;
  });

  useEffect(() => {
    const play = () => {
      scaleUpRef.current();
    };

    const interval = setInterval(play, 10);

    return () => {
      clearInterval(interval);
      hasAutoProgressBeenStopped();
    };
  }, [activeSlide]);

  const progress = () => {
    if (scale >= 100) {
      setScale(1);
    } else {
      setScale((scale += 0.178));
    }
  };

  const hasAutoProgressBeenStopped = (e) => {
    scaleUpRef.current = null;
    setScale(1);
  };

  const startProgress = (e) => {
    if (scale <= 100) {
      setScale((scale += 0.177));
    }
  };

  return (
    <div
      className="w-full mx-auto flex justify-center"
      style={{
        position: "relative",
        top: -55,
      }}
    >
      {data.map((val, i) => (
        <div
          key={val.id}
          className="mx-2.5 custom-dots cursor-pointer"
          onClick={(e) => onClick(e, i)}
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
            className={`progress-bar ${i === activeSlide ? "active" : ""}`}
            style={{
              width: `${scale}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CustomDots;
