import Date from "../Date/date";
import Tags from "../Tags/tags";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}) {
  const tagsPreview = tags.slice(0, 3);

  return (
    <div className="flex flex-col border-b border-neutral-200 mb-8">
      <div className="flex mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 relative mr-3">
            <Image
              src="/img/logo-witech-footer.png"
              layout="fill"
              className="rounded-full"
              alt={author?.name}
            />
          </div>
          <div className="more-post text-sm flex">
            Witech Enterprise
            <span className="text-gray-400 date font-medium">
              <Date dateString={date} />
            </span>
          </div>
        </div>
      </div>
      <div className="mb-8 flex">
        <div className="w-2/3">
          <h3 className="text-2xl mb-3 leading-snug font-bold truncate text-gray-700">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></a>
            </Link>
          </h3>
          <div
            className="text-sm leading-relaxed mb-4 truncate"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          {tags?.length > 0 && (
            <div className="text-sm text-gray-700 w-full flex flex-wrap">
              {tagsPreview.map((tag, index) => (
                <span
                  key={index}
                  className="mr-4 font-medium text-xs rounded-full bg-neutral-100 px-4 py-1 cursor-pointer"
                >
                  {tag?.node?.name}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="w-1/3 items-center flex justify-end">
          {coverImage && (
            <div className="sm:mx-0">
              <Image
                width={180}
                height={120}
                alt={`Cover Image for ${title}`}
                src={coverImage?.sourceUrl}
                className="bg-cover hover:shadow-medium transition-shadow duration-200"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
