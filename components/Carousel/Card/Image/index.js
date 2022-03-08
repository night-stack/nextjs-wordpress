import cn from "classnames";
import Link from "next/link";

export default function Image({ title, coverImage, slug }) {
  const image = (
    <img
      alt={`img-${slug}`}
      src={coverImage?.sourceUrl}
      style={{
        width: "100%",
        height: 281,
      }}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
