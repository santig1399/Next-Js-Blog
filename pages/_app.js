import Head from "next/head";
import { Container, GlobalStyle } from "../components/layout/Layout.elements";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="author" content="santig1399" />
        <meta
          name="description"
          content="Blog created with Next Js and the headless CMS Strapi"
        />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
