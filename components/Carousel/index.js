import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { ArrowRight, ArrowLeft } from "./CustomArrow";

const CustomCarousel = ({
  dots = false,
  infinite = false,
  autoplay = false,
  slidesToShow = 3,
  slidesToScroll = 3,
  autoplaySpeed,
  posts,
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    autoplay: autoplay,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    autoplaySpeed,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {posts.map(({ node }) => (
        <Card
          key={node.slug}
          title={node.title}
          coverImage={node.featuredImage?.node}
          date={node.date}
          author={node.author?.node}
          slug={node.slug}
          excerpt={node.excerpt}
          categories={node.categories?.edges[0]?.node}
        />
      ))}
    </Slider>
  );
};

export default CustomCarousel;
