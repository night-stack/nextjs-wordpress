import Alert from "../Alert/alert";
import Footer from "../../Footer/footer";
import Meta from "../Meta/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
