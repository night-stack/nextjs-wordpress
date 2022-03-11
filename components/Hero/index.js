import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "components/Button";
import CustomDots from "./CustomDots";

const isBrowser = () => typeof window !== "undefined";

const Hero = ({ data, autoPlay, stopAutoPlay }) => {
  const getWidth = () => !isBrowser && window.innerWidth;
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  const firstSlide = data[0];
  const secondSlide = data[1];
  const lastSlide = data[data.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [firstSlide, secondSlide, lastSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;

  useEffect(() => {
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
    autoPlayRef.current = autoPlay ? nextSlide : null;
  });

  // Reactivate the transition that is removed in smoothTransition.
  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  // AutoPlay
  useEffect(() => {
    if (autoPlay) {
      const play = () => {
        autoPlayRef.current();
      };
      const interval = setInterval(play, autoPlay * 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoPlay]);

  // Smooth transitions and browser resizing.
  useEffect(() => {
    const smooth = (e) => {
      if (e.target.className.includes("headline-item")) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let _slides = [];

    // We're at the last slide.
    if (activeSlide === data.length - 1)
      _slides = [data[data.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = data.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth(),
    });
  };

  const hasAutoPlayBeenStopped = (e) => {
    if (
      e &&
      autoPlayRef.current &&
      e.target.className.includes("custom-dots")
    ) {
      stopAutoPlay();
      autoPlayRef.current = null;
    }
  };

  const nextSlide = (e) => {
    hasAutoPlayBeenStopped(e);

    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === data.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const onClick = (e, i) => {
    hasAutoPlayBeenStopped(e);

    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: i,
    });
  };

  return (
    <div
      className="bg-witech-dark-blue pb-5"
      style={{
        paddingTop: 70,
      }}
    >
      <div className="headline container mx-auto md:px-35">
        {_slides.map((_slide, i) => (
          <div
            key={_slide.id + i}
            className={`headline-item w-full h-full my-auto ${
              i !== activeSlide ? "hidden" : "active"
            }`}
          >
            <div className="w-1/2 my-auto pr-4 pb-20">
              <div className="flex text-lg text-white font-bold items-center">
                <img
                  src={_slide.image}
                  alt={`logo-${_slide.id}`}
                  className="mr-4"
                  width={30}
                  height={30}
                />
                {_slide.title}
              </div>
              <h1 className="text-3.5xl font-bold text-white mt-6 leading-11">
                {_slide.heroText}
              </h1>
              <div className="flex flex-row mt-7">
                <div className="mr-5" style={{ width: 140 }}>
                  <Button className="w-full">Pricing</Button>
                </div>
                <div style={{ width: 140 }}>
                  <Button color="secondary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="w-1/2 bg-witech-blue flex justify-center place-items-center"
              style={{ borderTopLeftRadius: 150, minHeight: "471px" }}
            >
              <Image
                width={428}
                height={344}
                src={_slide.heroImage}
                alt={`hero-${_slide.id}`}
              />
            </div>
          </div>
        ))}
      </div>
      <CustomDots data={data} onClick={onClick} activeSlide={activeSlide} />
    </div>
  );
};

export default Hero;
