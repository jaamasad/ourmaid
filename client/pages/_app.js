import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import TopNavbar from "@/components/TopNavbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
