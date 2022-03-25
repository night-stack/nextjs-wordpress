import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ErrorPage from "next/error";
import Container from "components/Container/container";
import PostBody from "../../components/Post/Body/post-body";
import MoreStories from "components/Post/Stories/more-stories";
import Header from "../../components/Header/header";
import PostHeader from "../../components/Post/Header/post-header";
import Layout from "components/Layout/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "~/components/Post/Header/post-header";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Tags from "../../components/Post/Tags/tags";
import Categories from "~/components/Post/Categories/categories";
import Drawer from "~/components/Drawer";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Drawer show={show} setShow={setShow} />
      <nav className="bg-witech-dark-blue text-white text-sm font-bold mobile-content">
        <div className="flex items-center py-4 container mx-auto px-[25px]">
          <Link href="/" locale={router?.locale}>
            <a rel="noopener">
              <img src="/img/logo.png" className="h-[35px]" />
            </a>
          </Link>
          <button
            type="button"
            className="ml-auto menu-button"
            onClick={() => setShow(!show)}
          >
            <svg
              className="stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      <Header />
      {/* {router.isFallback ? null : (
        <div
          className="w-full"
          style={{
            paddingLeft: "7%",
          }}
        >
          <Categories categories={post.categories} />
        </div>
      )} */}
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>Witech Enterprise - {post.title}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <div id="post" className="flex mx-auto ml-16">
                <div className="w-2/3 px-10 mx-auto break-words post-wrapper">
                  <PostHeader
                    title={post.title}
                    coverImage={post.featuredImage?.node}
                    date={post.date}
                    author={post.author?.node}
                    categories={post.categories}
                  />
                  <PostBody content={post.content} />
                  <footer>
                    {post.tags?.edges?.length > 0 && <Tags tags={post.tags} />}
                  </footer>

                  {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </div>
                {/* <div className="w-1/3 px-10" /> */}
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
