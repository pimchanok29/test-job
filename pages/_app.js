import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="pt-[4rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
