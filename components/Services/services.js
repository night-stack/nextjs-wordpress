import React from "react";
import ServicesItem from "./services-item";

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
    <div
      className="mt-8 flex items-center justify-between"
      style={{
        marginRight: "-10px",
        marginLeft: "-10px",
      }}
    >
      {services.map((service, index) => (
        <ServicesItem key={index} data={service} />
      ))}
    </div>
  );
};

export default Services;
