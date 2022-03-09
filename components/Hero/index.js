import React from "react";
import Image from "next/image";
import Button from "components/Button";
import CustomDots from "./CustomDots";

const Hero = ({ data }) => {
  const [active, setActive] = React.useState("odoo");

  return (
    <div
      className="bg-witech-dark-blue pb-5"
      style={{
        paddingTop: 70,
      }}
    >
      <div className="headline container mx-auto">
        {data.map((val) => (
          <div
            key={val.id}
            className="headline-item flex w-full h-full my-auto"
            style={val.id !== active ? { display: "none" } : null}
          >
            <div className="w-1/2 my-auto pr-4 pb-20">
              <div className="flex font-lg text-white font-bold items-center">
                <img
                  src={val.image}
                  alt={`logo-${val.id}`}
                  className="mr-4"
                  width={30}
                  height={30}
                />
                {val.title}
              </div>
              <h1 className="text-4xl font-bold text-white mt-6">
                {val.heroText}
              </h1>
              <div className="flex flex-row mt-7">
                <div className="mr-5" style={{ width: 140 }}>
                  <Button className="w-full">Pricing</Button>
                </div>
                <div style={{ width: 140 }}>
                  <Button color="secondary" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="w-1/2 bg-witech-blue flex justify-center place-items-center"
              style={{ borderTopLeftRadius: 150, minHeight: "471px" }}
            >
              <Image
                width={428}
                height={344}
                src={val.heroImage}
                alt={`hero-${val.id}`}
              />
            </div>
          </div>
        ))}
      </div>
      <CustomDots data={data} onClick={setActive} active={active} />
    </div>
  );
};

export default Hero;
