import React from "react";
import CustomCarousel from "../Carousel";

const Articles = ({ posts }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-lg">Blogs</h1>
        <a
          href="#"
          target="_blank"
          className="text-witech-link text-sm font-bold"
        >
          More Articles
        </a>
      </div>
      <CustomCarousel
        posts={posts}
        itemClass="carousel-item"
        containerClass="container carousel-container"
      />
    </div>
  );
};

export default Articles;
