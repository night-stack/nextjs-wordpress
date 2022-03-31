import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/layout";
import Container from "~/components/Container/container";
import Navbar from "~/components/Navbar/navbar";
import Footer from "~/components/Footer/footer";
import { getAllPostsForHome, getPostsForBlogs } from "~/lib/api";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";
import { InfinitySpin } from "react-loader-spinner";
import Pagination from "~/components/Pagination";

const Blogs = ({ preview, getPosts: { edges, pageInfo } }) => {
  // const posts = edges;
  const { locale } = useRouter();
  const [posts, setPosts] = React.useState([]);
  const [page, setPage] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  // React.useEffect(async () => {
  //   setLoading(true);
  //   const response = await fetch(
  //     `https://witech.co.id/wp-json/wp/v2/posts?page=${page}&per_page=9`,
  //     {}
  //   );

  //   if (response) {
  //     setTotalPage(response.headers.get("X-WP-TotalPages"));
  //     let arr = [];
  //     response.json().then((result) => {
  //       result.forEach(async (v, i) => {
  //         arr.push({
  //           title: v.title.rendered,
  //           date: v.date,
  //           slug: v.slug,
  //         });
  //         const linkCat = v._links["wp:term"];
  //         const linkMedia = v._links["wp:featuredmedia"];
  //         if (linkCat) {
  //           // console.log(linArr[0]);
  //           const reqCat = await fetch(linkCat[0]?.href, {});
  //           if (reqCat) {
  //             reqCat.json().then((res) => {
  //               arr[i].category = res[0]?.name;
  //             });
  //           }
  //         }
  //         if (linkMedia) {
  //           // console.log(linArr[0]);
  //           const reqMedia = await fetch(linkMedia[0]?.href, {});
  //           if (reqMedia) {
  //             reqMedia.json().then((res) => {
  //               arr[i].source_url = res?.source_url;
  //             });
  //           }
  //         }
  //       });
  //     });
  //     setTimeout(() => {
  //       setLoading(false);
  //       return setData(arr);
  //     }, 3000);
  //   }
  // }, []);

  React.useEffect(() => {
    setLoading(true);
    if (edges) {
      setPosts(edges);
    }
    if (pageInfo) {
      setPage(pageInfo);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [edges, pageInfo]);

  const handleNext = async (next) => {
    setLoading(true);
    const res = await getPostsForBlogs(preview, next, "");
    if (res) {
      setCurrentPage(currentPage + 1);
      setPage(res?.pageInfo);
      setPosts(res?.edges);
      setLoading(false);
    }
  };

  const handlePrev = async (before) => {
    setLoading(true);
    const res = await getPostsForBlogs(preview, "", before);
    if (res) {
      setCurrentPage(currentPage - 1);
      setPage(res?.pageInfo);
      setPosts(res?.edges);
      setLoading(false);
    }
  };

  return (
    <>
      <Layout preview={preview}>
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
            {locale === "en" ? "Our Blog" : "Blog Kami"}
          </h1>
          <p className="text-base font-medium">
            {locale === "en"
              ? "The latest industry interviews, technologies, and resources"
              : "Informasi mengenai industri terbaru, teknologi, dan sumber daya"}
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
            {!loading &&
              posts?.map(({ node }) => {
                const categories = node?.categories?.edges[0]?.node;
                const coverImage = node?.featuredImage?.node;
                return (
                  <div
                    key={node?.id}
                    className="px-2.5 w-full lg:w-1/3 md:w-1/2 pb-2.5 min-h-[417px]"
                  >
                    <div className="card-header mb-5">
                      <div className="sm:mx-0">
                        {node?.slug ? (
                          <Link href={`/posts/${node?.slug}`} locale={locale}>
                            <a rel="noopener" aria-label={node?.title}>
                              <img
                                src={coverImage?.sourceUrl}
                                alt={`img-${node?.slug}`}
                                className="object-cover"
                                style={{
                                  width: "100%",
                                  height: 281,
                                }}
                              />
                            </a>
                          </Link>
                        ) : (
                          <img
                            src={coverImage?.sourceUrl}
                            alt={`img-${node?.slug}`}
                            className="object-cover"
                            style={{
                              width: "100%",
                              height: 281,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="mb-2.5 text-sm font-medium w-full">
                        {moment(node?.date).format("MMM DD, YYYY")}
                        <span className="category cursor-pointer hover:underline">
                          {categories?.name}
                        </span>
                      </div>
                      <div className="mb-5 text-lg font-bold w-full truncate">
                        <Link href={`/posts/${node?.slug}`} locale={locale}>
                          <a rel="noopener" className="hover:underline">
                            {node?.title}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="card-footer" />
                  </div>
                );
              })}
          </div>
        </Container>
        {!loading && (
          <Container>
            <div
              id="pagination"
              className="mt-10 pb-10 flex items-center justify-center"
            >
              <Pagination
                posts={posts}
                currentPage={currentPage}
                handleNext={() => handleNext(page?.endCursor)}
                handlePrev={() => handlePrev(page?.startCursor)}
              />
            </div>
          </Container>
        )}
        <Container>
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  const getPosts = await getPostsForBlogs(false, "", "");

  return {
    props: { preview: false, getPosts },
  };
}
