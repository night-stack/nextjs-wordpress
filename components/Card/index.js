import React from "react";
import CoverImage from "../Cover";

const Card = ({ title, coverImage, date, excerpt, author, slug }) => {
  return (
    <div className="w-full h-full">
      <div className="mb-5">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
    </div>
  );
};

export default Card;
