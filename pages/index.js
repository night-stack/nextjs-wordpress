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
  const posts = edges.slice(0, 6);
  const heroData = [
    {
      id: "development",
      title: "Development",
      heroText: "We will hel digital transformation and grow your business",
      image: "/img/logo.png",
      heroImage: "/img/odoo.png",
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
      heroImage: "/img/odoo.png",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero data={heroData} />
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
          <div className="flex justify-between items-center">
            <div
              className="text-4xl font-bold"
              style={{ width: "500px", height: "156px" }}
            >
              <h1>
                We build application that drive traffic,engagement, and
                conversion for industry-leading brands.
              </h1>
            </div>
            <div className="flex">
              <img
                src="/img/asset1.png"
                className="relative left-56 top-4"
                style={{ width: "289px", height: "285px" }}
              ></img>
              <img
                src="/img/rectangle.png"
                style={{ width: "276px", height: "299px" }}
              ></img>
            </div>
          </div>
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
