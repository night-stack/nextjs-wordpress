import React from "react";

const Services = () => {
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
    <div id="services">
      <div className="flex justify-between items-center">
        <div
          style={{
            maxWidth: "672px",
          }}
        >
          <h1 className="font-bold text-3.5xl text-witech-dark-blue leading-11">
            We build application that drive traffic,engagement, and conversion
            for industry-leading brands.
          </h1>
        </div>
        <div className="bg-witech-blue img-wrapper-services">
          <img
            className="relative"
            style={{ width: "289px", height: "285px", right: "62px" }}
            src="/img/asset1.png"
          ></img>
        </div>
      </div>

      <div
        className="mt-8 flex items-center justify-between"
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
              <img src={service?.logo} className="left-2 bottom-2 relative" />
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
  );
};

export default Services;
