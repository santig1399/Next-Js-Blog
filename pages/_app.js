import { Container, GlobalStyle } from "../components/Layout/Layout.elements";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const App = ({ Component, pageProps }) => {
  return (
    <>
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
