import Head from "next/head";
import Container from "../components/Container/container";
import MoreStories from "../components/Blog/Stories/more-stories";
import HeroPost from "../components/Blog/Post/hero-post";

import Layout from "../components/Blog/Layout/layout";
import Articles from "~/components/Articles";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Navbar from "../components/Navbar/navbar";

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Navbar></Navbar>
      <Layout preview={preview}>
        <Head>
          <title>Witech Enterprise | Your Business Solution</title>
        </Head>
        <Container>
          <Articles posts={edges} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
