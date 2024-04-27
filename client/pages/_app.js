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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7YM1Y5WW5M"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
            gtag('config', 'AW-11398284107');
          `,
        }}
      />
    </>
  );
}
