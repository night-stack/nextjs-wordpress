import React from "react";
import Container from "~/components/Container/container";
import Footer from "~/components/Footer/footer";
import Navbar from "~/components/Navbar/navbar";
import Layout from "~/components/Layout/layout";
import Chat from "~/components/Chat";
import Head from "next/head";

const About = () => {
  const services = [
    {
      logo: "/img/assetappdev.png",
      title: "App Development",
      desc: "We cover backend and frontend using latest technology stacks, as well as CMS Development, Development Consulting, Support, and Maintenance.",
    },
    {
      logo: "/img/assetwebdesign.png",
      title: "Web Design",
      desc: "Create a website application according to your needs, we will help you to give best version of your website design.",
    },
    {
      logo: "/img/assetenterpriseapps.png",
      title: "Enterprise Apps",
      desc: "We can help integrate apps and provide best solution to maintain company stability, balance, maintenance, technology & support to ensure your business.",
    },
    {
      logo: "/img/assetitinfrastructure.png",
      title: "IT Infrastructure",
      desc: "Fulfill hardware & software company. We will setup and optimize IT infrastructure also provide IT teams that can carry out maintenance & Technical support.",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Witech Enterprise - About Us</title>
        </Head>
        <Navbar />
        <div className="bg-witech-dark-blue background-img-about mx-auto">
          <div
            className="font-bold flex items-center container mx-auto"
            style={{
              paddingLeft: 100,
              paddingRight: 100,
              minHeight: 690,
            }}
          >
            <div className="w-1/2 mb-25">
              <div className="mb-7.5">
                <h1 className="text-witech-link text-xl">
                  Let’s get acquainted
                </h1>
              </div>
              <div>
                <h1
                  className="text-white text-3xl"
                  style={{
                    fontSize: 33,
                  }}
                >
                  We’re software house and design agency company based in Medan,
                  North Sumatera
                </h1>
              </div>
              <div className="pt-5">
                <h1 className="text-white text-lg font-normal">
                  We ensure quality and privacy in our work. We have
                  professional teams with experience and expertise in
                  application development. Our team consists of various
                  devisions and can develop with many frameworks.
                </h1>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
        <Container>
          <div id="services" className="mb-7.5">
            <h1 className="font-bold text-lg">Our Services</h1>
          </div>
          <div>
            <div
              className="flex items-center justify-between"
              style={{
                marginRight: "-10px",
                marginLeft: "-10px",
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-witech-dark-blue w-1/4 mx-2.5 p-5"
                  style={{ minHeight: 360 }}
                >
                  <div className="img-wrapper mt-7 mb-5">
                    <img
                      src={service?.logo}
                      className="left-2 bottom-2 relative"
                    />
                  </div>
                  <h1 className="text-sm font-bold text-white mb-5">
                    {service?.title}
                  </h1>
                  <p
                    className="text-sm md:text-ss text-white"
                    style={{ minHeight: 100 }}
                  >
                    {service?.desc}
                  </p>
                  <div className="mt-7 md:mt-4 flex mb-9 md:mb-6 items-center cursor-pointer">
                    <h1 className="text-sm text-witech-link">Contact Us</h1>
                    <img className="ml-2.5" src="/img/arrow.png" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <div className="flex justify-between pt-20">
            <div className="w-1/2">
              <h1 className="font-bold text-lg mb-7.5">Our Mission</h1>
              <div className="text-lg">
                Our goal is to create systems for your product development and
                to solve your business problems. We offer our services for small
                to medium-sized companies that want to optimize their
                performance. We ensure IT quality improvement of our companies
                and local businesses client by giving an full effort of out
                professional teams. We provide this effort to fully support
                technology development in Indonesia. especially in Medan.
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="ml-auto w-full bg-cover"
                style={{ maxWidth: "428px", height: "285px" }}
                src="/img/our-mission-about.png"
              />
            </div>
          </div>
        </Container>
        <Container>
          <div className="text-lg font-medium pt-20">
            <h1 className="font-bold mb-7.5">Languages and Frameworks</h1>
            <div className="flex justify-between">
              <div className="w-1/4">
                <ul>
                  <li className="pb-1">
                    <h1 className="font-bold">Back End & Data</h1>
                  </li>
                  <li className="py-1">
                    <h1>PHP</h1>
                  </li>
                  <li className="py-1">
                    <h1>Node.js</h1>
                  </li>
                  <li className="py-1">
                    <h1>Python</h1>
                  </li>
                  <li className="py-1">
                    <h1>Golang</h1>
                  </li>
                  <li className="py-1">
                    <h1>MySQL</h1>
                  </li>
                  <li className="py-1">
                    <h1>MariaDB</h1>
                  </li>
                  <li className="py-1">
                    <h1>Postagre SQL</h1>
                  </li>
                  <li className="py-1">
                    <h1>Mongo DB</h1>
                  </li>
                </ul>
              </div>
              <div className="w-1/4">
                <ul>
                  <li className="pb-1">
                    <h1 className="font-bold">Back End & Data</h1>
                  </li>
                  <li className="py-1">
                    <h1>HTML</h1>
                  </li>
                  <li className="py-1">
                    <h1>CSS</h1>
                  </li>
                  <li className="py-1">
                    <h1>Sass (SCSS)</h1>
                  </li>
                  <li className="py-1">
                    <h1>Javascript</h1>
                  </li>
                  <li className="py-1">
                    <h1>Vue js</h1>
                  </li>
                  <li className="py-1">
                    <h1>React js</h1>
                  </li>
                  <li className="py-1">
                    <h1>Next js</h1>
                  </li>
                  <li className="py-1">
                    <h1>Wordpress</h1>
                  </li>
                </ul>
              </div>
              <div className="w-1/4">
                <ul>
                  <li className="pb-1">
                    <h1 className="font-bold">Mobile</h1>
                  </li>
                  <li className="py-1">
                    <h1>React Native</h1>
                  </li>
                  <li className="py-1">
                    <h1>Kotlin</h1>
                  </li>
                  <li className="py-1">
                    <h1>Ionic</h1>
                  </li>
                  <li className="py-1">
                    <h1>Flutter</h1>
                  </li>
                </ul>
              </div>
              <div className="w-1/4">
                <ul>
                  <li className="pb-1">
                    <h1 className="font-bold">Cloud</h1>
                  </li>
                  <li className="py-1">
                    <h1>AWS</h1>
                  </li>
                  <li className="py-1">
                    <h1>Google Cloud</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="font-bold flex items-center pt-20">
            <div className="w-1/3">
              <img
                src="/img/interested-about.png"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="w-2/3 px-10">
              <h1
                className="text-3.5xl"
                style={{
                  fontSize: 64,
                  lineHeight: "80px",
                }}
              >
                Interested in digging deeper?
              </h1>
              <div className="flex items-center mt-5">
                <h1 className="text-2xl">Discuss with us</h1>
                <div
                  className="flex justify-center items-center ml-7 bg-witech-link rounded-full"
                  style={{ width: "50px", height: "50px" }}
                >
                  <a href="#">
                    <img className="w-6 h-6" src="/svg/arrowleft.svg"></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-2">
            <Footer />
          </div>
        </Container>
      </Layout>
      <Chat />
    </>
  );
};

export default About;
