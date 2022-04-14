import React from "react";
import { useRouter } from "next/router";

const Product = () => {
  const [data, setData] = React.useState([]);
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });
  const [claimParams, setClaimParams] = React.useState("");
  const [checkParams, setCheckParams] = React.useState("");
  const router = useRouter();

  React.useEffect(async () => {
    if (router) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId: router?.query?.trackId }),
      };
      const param = router?.asPath?.replace(router?.pathname, "");
      setClaimParams(`http://localhost:3000/form/claim-coupon${param}`);
      setCheckParams(`http://localhost:3000/form/unique-id${param}`);
      if (router?.query?.qrcodeId)
        fetch(
          `https://opim.api-dev.qodrbee.com/api/q/v2/${router?.query?.qrcodeId}`,
          requestOptions
        )
          .then((req) => req.json())
          .then((res) => {
            if (res?.statusCode === 200) {
              setData(res?.data);
            }
          });
    }
  }, [router?.query]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  return (
    <div>
      Contoh
      <iframe
        src={checkParams}
        width="100%"
        height="fit-content"
        scrolling="no"
        frameBorder="0"
      />
      <iframe
        id="claim-coupon"
        src={claimParams}
        width="100%"
        height={windowSize?.height}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
};

export default Product;
