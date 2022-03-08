import React from "react";
import Image from "./Image";
import moment from "moment";

const Card = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) => {
  return (
    <div className="px-2.5">
      <div className="card-header mb-5">
        <Image title={title} coverImage={coverImage} slug={slug} />
      </div>
      <div className="card-body">
        <div className="mb-2.5 text-sm font-medium w-full">
          {moment(date).format("MMM DD, YYYY")}{" "}
          <span className="category">{categories.name}</span>
        </div>
        <div
          className="mb-5 text-lg font-bold w-full truncate"
          style={{
            whiteSpace: "normal",
          }}
        >
          {title}
        </div>
      </div>
      <div className="card-footer" />
    </div>
  );
};

export default Card;
