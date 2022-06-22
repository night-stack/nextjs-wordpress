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
      locale: "en",
      id: "development",
      title: "Development",
      heroText: "We will help digital transformation and grow your business",
      image: "/img/logo.png",
      heroImage: "/img/witech.png",
    },
    {
      locale: "en",
      id: "odoo",
      title: "Odoo ERP",
      heroText: "Odoo is an app that cover all your company needs",
      image: "/img/odoo-logo.png",
      heroImage: "/img/odoo.png",
    },
    {
      locale: "en",
      id: "hooela",
      title: "Hooela",
      heroText: "Digitize and Simplify every process in your F&B Business",
      image: "/img/hooela-logo.png",
      heroImage: "/img/hooela.png",
    },
    {
      locale: "id",
      id: "development",
      title: "Development",
      heroText:
        "Kami membantu transformasi digital & mengembangkan bisnis Anda",
      image: "/img/logo.png",
      heroImage: "/img/witech.png",
    },
    {
      locale: "id",
      id: "odoo",
      title: "Odoo ERP",
      heroText:
        "Odoo adalah aplikasi yang mencakup semua kebutuhan perusahaan Anda",
      image: "/img/odoo-logo.png",
      heroImage: "/img/odoo.png",
    },
    {
      locale: "id",
      id: "hooela",
      title: "Hooela",
      heroText: "Digitalkan dan Sederhanakan setiap proses di Bisnis F&B Anda",
      image: "/img/hooela-logo.png",
      heroImage: "/img/hooela.png",
    },
  ];

  const stopAutoPlay = React.useCallback(() => {
    setAutoPlay(0);
  }, []);

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (window.innerWidth <= 600) {
  //       stopAutoPlay();
  //     } else {
  //       setAutoPlay(3);
  //     }
  //   }
  // }, []);

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

        <Services />

        <Container>
          <Footer />
        </Container>
      </Layout>
      <Chat />
    </>
  );
}

export async function getServerSideProps() {
  const allPosts = await getAllPostsForHome();
  return {
    props: { allPosts, preview: false },
  };
}
