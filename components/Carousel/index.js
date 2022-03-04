import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../Card";
import { ArrowRight, ArrowLeft } from "./CustomArrow";

const CustomCarousel = ({
  arrows = true,
  autoPlay = false,
  autoPlaySpeed = 3000,
  centerMode = false,
  className = "",
  containerClass = "container",
  dotListClass = "",
  draggable = true,
  focusOnSelect = false,
  infinite = false,
  itemClass = "",
  keyBoardControl = true,
  minimumTouchDrag = 80,
  renderButtonGroupOutside = false,
  renderDotsOutside = false,
  sliderClass = "",
  swipeable = true,
  showDots = false,
  posts,
}) => {
  const breakPoints = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Carousel
      ssr
      additionalTransfrom={0}
      arrows={arrows}
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      centerMode={centerMode}
      className={className}
      containerClass={containerClass}
      customLeftArrow={<ArrowLeft />}
      customRightArrow={<ArrowRight />}
      dotListClass={dotListClass}
      draggable={draggable}
      focusOnSelect={focusOnSelect}
      infinite={infinite}
      itemClass={itemClass}
      keyBoardControl={keyBoardControl}
      minimumTouchDrag={minimumTouchDrag}
      renderButtonGroupOutside={renderButtonGroupOutside}
      renderDotsOutside={renderDotsOutside}
      responsive={breakPoints}
      showDots={showDots}
      sliderClass={sliderClass}
      swipeable={swipeable}
      slidesToSlide={3}
    >
      {posts.map(({ node }) => (
        <Card
          key={node?.slug}
          title={node?.title}
          coverImage={node?.featuredImage?.node}
          date={node?.date}
          author={node?.author?.node}
          slug={node?.slug}
          excerpt={node?.excerpt}
        />
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
