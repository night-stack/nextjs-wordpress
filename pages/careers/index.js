import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/layout";
import Container from "~/components/Container/container";
import Navbar from "~/components/Navbar/navbar";
import Footer from "~/components/Footer/footer";

import { useRouter } from "next/router";
import { InfinitySpin } from "react-loader-spinner";

const Careers = () => {
  const { locale } = useRouter();
  const [careers, setCareers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>{`Witech Enterprise - ${
            locale === "en" ? "Blogs" : "Artikel"
          }`}</title>
        </Head>
        <Navbar />
        <div
          id="blog"
          className="bg-witech-dark-blue mx-auto text-center py-25 lg:py-25 md:py-20 text-white"
        >
          <h1 className="font-semibold text-3.5xl leading-11 mb-5">
            We want you!
          </h1>
          <p className="text-base font-medium px-2 md:px-0">
            Be part of our company culture, learn, grow and move forward
            together.
          </p>
        </div>
        <Container>
          <div
            id="blog"
            className="flex justify-between items-center w-full flex-wrap"
          >
            {loading && (
              <div id="spinner" className="w-full flex justify-center">
                <InfinitySpin color="#05103A" />
              </div>
            )}
            {!loading && careers.length === 0 && (
              <div className="empty-state">
                <div className="rounded-full bg-gray-100 w-[120px] h-[120px] flex items-center justify-center mb-7.5">
                  <img alt="empty-asset" src="/img/empty-state/empty.png" />
                </div>
                {locale === "en"
                  ? "No positions available yet"
                  : "Lowongan tidak tersedia"}
              </div>
            )}
          </div>
        </Container>

        <Container>
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default Careers;
