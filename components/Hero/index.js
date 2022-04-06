import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "components/Button";
import { useRouter } from "next/router";
import CustomDots from "./CustomDots";
import Slider from "react-slick";

const isBrowser = () => typeof window !== "undefined";

const Hero = ({ data, autoPlay, stopAutoPlay }) => {
  const getWidth = () => !isBrowser && window.innerWidth;
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();
  const { locale, push } = useRouter();
  const filterData = data.filter((data) => data.locale === locale);

  const firstSlide = filterData[0];
  const secondSlide = filterData[1];
  const lastSlide = filterData[filterData.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [firstSlide, secondSlide, lastSlide],
  });

  const { activeSlide, translate, _slides, transition } = state;
  const settings = {
    customPaging: function (i) {
      return (
        <a rel="noopener">
          <div className="h-1 bg-hero-slider" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      _slides: [firstSlide, secondSlide, lastSlide],
    }));
  }, [locale]);

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
    if (activeSlide === filterData.length - 1)
      _slides = [filterData[filterData.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = filterData.slice(activeSlide - 1, activeSlide + 2);

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
      activeSlide: activeSlide === filterData.length - 1 ? 0 : activeSlide + 1,
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

  const pricingClick = () => {
    push("https://witech.co.id/pricing/");
  };

  return (
    <div className="bg-witech-dark-blue pb-5 pt-[70px] md:pt-7.5">
      <div className="container mx-auto pt-2 pl-6.5 pr-2.5">
        <Slider {...settings} className="mobile-content">
          {_slides.map((data, i) => (
            <div key={data.id + i} className="card hero">
              <div className="w-9/12 md:w-1/2 relative mr-2.5 md:pl-10">
                <div className="flex text-sm text-white font-bold items-center">
                  <img
                    src={data.image}
                    alt={`logo-${data.id}`}
                    className="mr-3"
                    width={25}
                    height={25}
                  />
                  {data.title}
                </div>
                <p className="hero-text481 z-10 mt-4 -mr-12 text-base font-bold text-white md:w-11/12">
                  {data.heroText}
                </p>
                <div className="flex flex-row mt-3.5">
                  {data.id === "odoo" && (
                    <div className="mr-2" style={{ width: 76 }}>
                      <Button className="w-full" onClick={pricingClick}>
                        {locale === "en" ? "Pricing" : "Harga"}
                      </Button>
                    </div>
                  )}
                  <div style={{ width: 90 }}>
                    <Button color="secondary" className="w-full">
                      {locale === "en" ? "Learn More" : "Pelajari Lebih"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-witech-blue hero-image hero-width481 md:w-[350px] md:h-[250px]">
                <img
                  src={data?.heroImage}
                  className="object-cover lg:w-[250px] md:h-[200px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
                {_slide.id === "odoo" && (
                  <div
                    className="mr-5"
                    style={{ width: 140 }}
                    onClick={pricingClick}
                  >
                    <Button className="w-full">
                      {locale === "en" ? "Pricing" : "Harga"}
                    </Button>
                  </div>
                )}
                <div style={{ width: 140 }}>
                  <Button color="secondary" className="w-full">
                    {locale === "en" ? "Learn More" : "Pelajari Lebih"}
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="w-1/2 bg-witech-blue flex justify-center place-items-center lg-wrapper-hero"
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
