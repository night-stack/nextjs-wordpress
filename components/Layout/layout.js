import Alert from "components/Alert/alert";
import Footer from "components/Footer/footer";
import Meta from "components/Post/Meta/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
