import React from "react";
import Image from "./Image";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
}) => {
  const { locale } = useRouter();

  return (
    <div className="px-2.5 card">
      <div className="card-header mb-5">
        <Image title={title} coverImage={coverImage} slug={slug} />
      </div>
      <div className="card-body">
        <div className="mb-2.5 text-sm font-medium w-full">
          {moment(date).format("MMM DD, YYYY")}
          <span className="category">{categories.name}</span>
        </div>
        <div className="mb-5 text-lg font-bold w-full truncate">
          <Link href={`/posts/${slug}`} locale={locale}>
            <a rel="noopener" className="hover:underline">
              {title}
            </a>
          </Link>
        </div>
      </div>
      <div className="card-footer" />
    </div>
  );
};

export default Card;
