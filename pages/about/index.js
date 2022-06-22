import React from "react";
import Container from "~/components/Container/container";
import Footer from "~/components/Footer/footer";
import Navbar from "~/components/Navbar/navbar";
import Layout from "~/components/Layout/layout";
import Chat from "~/components/Chat";
import Head from "next/head";
import { useRouter } from "next/router";
import Slider from "react-slick";

const About = () => {
  const { locale } = useRouter();
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsTablet = {
    dots: false,
    infinite: false,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
  };

  const services = [
    {
      locale: "en",
      logo: "/img/assetappdev.png",
      title: "App Development",
      desc: "We cover backend and frontend using latest technology stacks, as well as CMS Development, Development Consulting, Support, and Maintenance.",
    },
    {
      locale: "en",
      logo: "/img/assetwebdesign.png",
      title: "Web Design",
      desc: "Create a website application according to your needs, we will help you to give best version of your website design.",
    },
    {
      locale: "en",
      logo: "/img/assetenterpriseapps.png",
      title: "Enterprise Apps",
      desc: "We can help integrate apps and provide best solution to maintain company stability, balance, maintenance, technology & support to ensure your business.",
    },
    {
      locale: "en",
      logo: "/img/assetitinfrastructure.png",
      title: "IT Infrastructure",
      desc: "Fulfill hardware & software company. We will setup and optimize IT infrastructure also provide IT teams that can carry out maintenance & Technical support.",
    },
    {
      locale: "id",
      logo: "/img/assetappdev.png",
      title: "Pengembangan Aplikasi",
      desc: "Kami mencakup backend dan frontend menggunakan tumpukan teknologi terbaru, serta Pengembangan CMS, Konsultasi Pengembangan, Dukungan, dan Pemeliharaan.",
    },
    {
      locale: "id",
      logo: "/img/assetwebdesign.png",
      title: "Desain Web",
      desc: "Buat aplikasi website sesuai kebutuhan Anda, kami dengan senang hati akan membantu Anda untuk memberikan versi terbaik dari desain website Anda.",
    },
    {
      locale: "id",
      logo: "/img/assetenterpriseapps.png",
      title: "Aplikasi Perusahaan",
      desc: "Kami membantu mengintegrasikan aplikasi dan memberikan solusi terbaik untuk menjaga stabilitas, keseimbangan, pemeliharaan, teknologi & dukungan perusahaan untuk memastikan bisnis Anda.",
    },
    {
      locale: "id",
      logo: "/img/assetitinfrastructure.png",
      title: "Infrastruktur IT",
      desc: "Memenuhi perusahaan perangkat keras & perangkat lunak. Kami akan menyiapkan dan mengoptimalkan infrastruktur TI serta menyediakan tim TI yang dapat melakukan pemeliharaan & dukungan Teknis.",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>{`Witech Enterprise - ${
            locale === "en" ? "About Us" : "Tentang Kami"
          }`}</title>
        </Head>
        <Navbar />
        <div
          id="about"
          className="bg-witech-dark-blue background-img-about mx-auto"
        >
          <div className="font-bold flex items-center container mx-auto px-25 about-headline">
            <div className="w-1/2 mb-25 about">
              <div className="mb-7.5">
                <p className="text-witech-link text-xl">
                  {locale === "en" ? "Let’s get acquainted" : "Mari berkenalan"}
                </p>
              </div>
              <div>
                <h1
                  className="text-white text-3xl"
                  style={{
                    fontSize: 33,
                  }}
                >
                  {locale === "en"
                    ? "We’re software house and design agency company based in Medan, North Sumatera"
                    : "Kami adalah perusahaan software house dan agensi desain berbasis di Medan, Sumatera Utara"}
                </h1>
              </div>
              <div className="pt-5 max-w-xl">
                <h1 className="text-white text-lg font-normal subtitle">
                  {locale === "en"
                    ? "We ensure quality and privacy in our work. We have professional teams with experience and expertise in application development. Our team consists of various devisions and can develop with many frameworks."
                    : "Kami memastikan kualitas dan privasi dalam pekerjaan kami. Memiliki tim profesional dengan pengalaman & keahlian dalam pengembangan aplikasi. Tim kami terdiri dari berbagai divisi & dapat menggunakan banyak framework."}
                </h1>
              </div>
            </div>
            <div className="w-1/2 about"></div>
          </div>
        </div>
        <Container>
          <div id="services" className="mb-7.5">
            <h1 className="font-bold text-lg">
              {locale === "en" ? "Our Services" : "Layanan Kami"}
            </h1>
          </div>
          <div>
            <div
              className="flex items-center justify-between services"
              style={{
                marginRight: "-10px",
                marginLeft: "-10px",
              }}
            >
              {services
                .filter((service) => service.locale === locale)
                .map((service, index) => (
                  <div
                    key={index}
                    className="bg-witech-dark-blue w-1/4 mx-2.5 p-5 justify-center flex flex-col"
                    // style={{ minHeight: 360 }}
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
                      className="text-sm md:text-ss text-white mb-7"
                      style={{ minHeight: 100 }}
                    >
                      {service?.desc}
                    </p>
                    {/* <div className="mt-7 md:mt-4 flex mb-9 md:mb-6 items-center cursor-pointer">
                      <h1 className="text-sm text-witech-link">
                        {locale === "en" ? "Contact Us" : "Kontak"}
                      </h1>
                      <img className="ml-2.5" src="/img/arrow.png" />
                    </div> */}
                  </div>
                ))}
            </div>
          </div>
          <Slider
            {...settings}
            className="mobile-content"
            style={{
              width: "100%",
            }}
          >
            {services
              .filter((data) => data.locale === locale)
              .map((data, index) => (
                <div key={index} className="mt-5 card">
                  <div className="services-card bg-witech-dark-blue">
                    <div className="img-wrapper mt-8 mb-5">
                      <img
                        src={data?.logo}
                        className="object-cover left-2 bottom-2 relative"
                      />
                    </div>
                    <h1 className="text-center text-sm font-bold text-white mb-8">
                      {data?.title}
                    </h1>
                  </div>
                </div>
              ))}
          </Slider>
        </Container>
        <Container>
          <div id="mission" className="flex justify-between pt-20 pb-13">
            <div className="w-1/2">
              <h1 className="font-bold text-lg mb-7.5">
                {locale === "en" ? "Our Mission" : "Misi Kami"}
              </h1>
              <div className="text-lg">
                {locale === "en"
                  ? "Our goal is to create systems for your product development and to solve your business problems. We offer our services for small to medium-sized companies that want to optimize their performance. We ensure IT quality improvement of our companies and local businesses client by giving an full effort of out professional teams. We provide this effort to fully support technology development in Indonesia. Especially in Medan."
                  : "Tujuan kami adalah menciptakan sistem dalam pengembangan produk & memecahkan masalah bisnis Anda. Kami menawarkan layanan kami untuk perusahaan kecil hingga menengah. Kami memastikan kualitas IT perusahaan kami dengan memberikan upaya penuh dari tim profesional. Upaya ini kami lakukan untuk mendukung sepenuhnya perkembangan teknologi di Indonesia. Khususnya di Medan."}
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="ml-auto w-full bg-cover object-cover max-w-[428px] h-[285px]"
                src="/img/our-mission-about.png"
              />
            </div>
          </div>
        </Container>
        <hr className="h-3 bg-neutral-100 border-0" />
        <Container>
          <div className="font-medium pt-5">
            <h1 className="font-bold text-lg mb-7.5">
              {locale === "en"
                ? "Languages and Frameworks"
                : "Bahasa dan Kerangka Kerja"}
            </h1>
            <div className="flex flex-wrap justify-between">
              <div className="w-1/2 md:w-1/4 mb-7.5">
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
              <div className="w-1/2 md:w-1/4">
                <ul>
                  <li className="pb-1">
                    <h1 className="font-bold">Front End</h1>
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
              <div className="w-1/2 md:w-1/4">
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
              <div className="w-1/2 md:w-1/4">
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
          <div
            id="contact"
            className="font-bold flex flex-wrap items-center pt-5"
          >
            <div className="w-full md:w-1/3">
              <img
                src="/img/interested-about.png"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="w-full md:w-2/3 px-10">
              <h1 className="text-3.5xl subtitle">
                {locale === "en"
                  ? "Interested in digging deeper?"
                  : "Tertarik mengenal lebih dalam?"}
              </h1>
              <div className="flex items-center mt-5 title">
                <h1 className="text-2xl">
                  {locale === "en"
                    ? "Discuss with us"
                    : "Diskusikan dengan kami"}
                </h1>
                <div className="flex justify-center items-center ml-7 bg-witech-link rounded-full w-[50px] h-[50px]">
                  <a rel="noopener" href="#">
                    <img className="h-6" src="/svg/arrowleft.svg"></img>
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
