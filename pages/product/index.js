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

  // React.useEffect(async () => {
  //   if (router) {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         "access-control-allow-origin": "*",
  //         "content-type": "application/json",
  //         "referrer-policy": "no-referrer",
  //       },
  //       body: JSON.stringify({ trackId: router?.query?.trackId }),
  //     };
  //     // const param = router?.asPath?.replace(router?.pathname, "");
  //     // setClaimParams(`http://localhost:3000/form/claim-coupon${param}`);
  //     // setCheckParams(`http://localhost:3000/form/unique-id${param}`);
  //     if (router?.query?.qrcodeId)
  //       fetch(
  //         `https://opim.api-dev.qodrbee.com/api/q/v2/${router?.query?.qrcodeId}`,
  //         requestOptions
  //       )
  //         .then((req) => req.json())
  //         .then((res) => {
  //           if (res?.statusCode === 200) {
  //             setData(res?.data);
  //           }
  //         });
  //   }
  // }, [router]);

  // React.useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }
  // }, []);

  return (
    <div>
      {data.length > 0 ? (
        <div className="w-full text-center justify-items-center grid">
          <img src={data.product?.images[0]?.url} />
          <p>
            <b>{data.product?.name}</b>
          </p>
          <p>{data.product?.phone}</p>
          <p>{data.product?.distributedBy}</p>
          <p>{data.product?.producedBy}</p>
          <p>{data.product?.sku}</p>
          <p>{data.product?.category}</p>
          <p>Rp{Intl.NumberFormat("id").format(data.product?.price)}</p>
          <p>{data.product?.shortDescription}</p>
        </div>
      ) : null}
      <div id="opim-form" />
    </div>
  );
};

export default Product;
