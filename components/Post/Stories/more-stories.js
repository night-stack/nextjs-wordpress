import PostPreview from "../../Post/Preview/post-preview";
import SectionSeparator from "../Separator/section-separator";

export default function MoreStories({ posts }) {
  return (
    <section className="">
      <SectionSeparator />
      <h2 className="mb-10 text-base md:text-base font-semibold leading-11">
        More Articles
      </h2>
      <div className="w-full mb-8">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage?.node}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
            tags={node.tags?.edges}
          />
        ))}
      </div>
      <div className="text-center w-full mb-9 md:mb-14">
        <button
          type="button"
          className="bg-black px-8 md:px-12 py-3 rounded-full text-white text-xs md:text-sm font-semibold"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
