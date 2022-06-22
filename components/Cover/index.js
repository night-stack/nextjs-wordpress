import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      width={2000}
      height={1500}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      className={cn("shadow-small object-cover", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a rel="noopener" aria-label={title}>
            {image}
          </a>
        </Link>
      ) : (
        coverImage && image
      )}
    </div>
  );
}
