import React from "react";
import { useRouter } from "next/router";
import CustomCarousel from "../Carousel";

const Articles = ({ posts }) => {
  const { locale } = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-bold text-lg">
          {locale === "en" ? "Blogs" : "Artikel"}
        </h1>
        <a
          href="#"
          target="_blank"
          className="text-witech-link text-sm font-bold"
          rel="noopener"
        >
          {locale === "en" ? "More Articles" : "Artikel Lainnya"}
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
