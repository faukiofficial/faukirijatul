import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Project from "../components/Project";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
