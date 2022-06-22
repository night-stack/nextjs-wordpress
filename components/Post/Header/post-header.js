import Avatar from "../Avatar/avatar";
import Date from "../Date/date";
import CoverImage from "components/Cover";
import PostTitle from "../Title/post-title";
import Categories from "../Categories/categories";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="mb-8 md:mb-12">
        <Avatar author={author} date={date} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-10 md:mb-10 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
    </>
  );
}
