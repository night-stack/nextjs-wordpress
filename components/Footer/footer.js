import FooterItem from "./footer-item";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between items-center my-20">
        <div className="flex items-center mb-20">
          <img src="/img/logo-witech-footer.png" style={{ width: "50px", height: "50px" }}></img>
          <div className="text-sm font-bold ml-4">
            <h1>PT. Witech Inovasi Indonesia</h1>
            <h1>Some of tagline words</h1>
          </div>
        </div>
        <div className="font-bold text-lg mt-6">
          <h1 className="mb-5">Contact</h1>
          <div className="flex">
            <img className="mr-4" src="/img/rectangle4.png" style={{ width: "32px", height: "32px" }}></img>
            <h1 className="">(021) - 11234567</h1>
          </div>
          <div className="flex my-4">
            <img className="mr-4" src="/img/rectangle4.png" style={{ width: "32px", height: "32px" }}></img>
            <h1 className="">halo@witech.co.id</h1>
          </div>
        </div>
        <div className="text-lg font-bold mb-4">
          <h1>Location</h1>
          <h1 style={{ width: "300px" }}>Jl. Multatuli No. 8A Hamdan, Medan, Sumatera Utara 20212, Indonesia</h1>
        </div>
        <div className="mb-20 font-bold">
          <img src="/img/oddo-logo-footer.png" style={{ width: "104px", height: "33.08px" }}></img>
          <h1>Partner</h1>
        </div>
      </div>
      <FooterItem />
    </>

    // <footer className="bg-accent-1 border-t border-accent-2">
    //   <Container>
    //     <div className="py-28 flex flex-col lg:flex-row items-center">
    //       <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
    //         Statically Generated with Next.js.
    //       </h3>
    //       <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
    //         <a
    //           href="https://nextjs.org/docs/basic-features/pages"
    //           className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
    //         >
    //           Read Documentation
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
}
