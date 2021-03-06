import Link from "next/link";
import { useRouter } from "next/router";

export default function Image({ title, coverImage, slug }) {
  const { locale } = useRouter();
  const image = (
    <img
      alt={`img-${slug}`}
      src={coverImage?.sourceUrl}
      className="object-cover"
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} locale={locale}>
          <a rel="noopener" aria-label={title}>
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
