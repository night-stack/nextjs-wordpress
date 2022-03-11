import React from "react";
import Head from "next/head";
import Container from "../components/Container/container";

import Layout from "components/Layout/layout";
import Articles from "~/components/Articles";
import { getAllPostsForHome } from "../lib/api";
import Hero from "~/components/Hero";
import InstagramFeed from "~/components/InstagramFeed";
import Navbar from "../components/Navbar/navbar";
import Services from "../components/Services/services";
import Chat from "~/components/Chat";
import Footer from "~/components/Footer/footer";

export default function Index({ allPosts: { edges }, preview }) {
  // const heroPost = edges[0]?.node;Layout
  const [autoPlay, setAutoPlay] = React.useState(3);
  const posts = edges.slice(0, 6);
  const heroData = [
    {
      id: "development",
      title: "Development",
      heroText: "We will help digital transformation and grow your business",
      image: "/img/logo.png",
      heroImage: "/img/witech.png",
    },
    {
      id: "odoo",
      title: "Odoo ERP",
      heroText: "Odoo is an app that cover all your company needs",
      image: "/img/odoo-logo.png",
      heroImage: "/img/odoo.png",
    },
    {
      id: "hooela",
      title: "Hooela",
      heroText: "Digitize and Simplify every process in your F&B Business",
      image: "/img/hooela-logo.png",
      heroImage: "/img/hooela.png",
    },
  ];

  const stopAutoPlay = React.useCallback(() => {
    setAutoPlay(0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero data={heroData} autoPlay={autoPlay} stopAutoPlay={stopAutoPlay} />
      <Layout preview={preview}>
        <Head>
          <title>Witech Enterprise | Your Business Solution</title>
        </Head>
        <Container>
          <Articles posts={posts} />
        </Container>
        <Container>
          <InstagramFeed />
        </Container>
        <Container>
          <Services />
        </Container>
        <Container>
          <Footer />
        </Container>
      </Layout>
      <Chat />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
