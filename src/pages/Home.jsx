import Activities from "../components/home/Activities";
import Carosel from "../components/home/Carosel";
import Footer from "../components/Footer";
import Intro from "../components/home/Intro";
import Nav from "../components/Nav";
import Newsletter from "../components/home/Newsletter";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const Home = () => {
  UpdateTitle(`Tan Tock Seng Hospital`);

  return (
    <>
      <Nav />
      <Carosel />
      <Intro />
      <Activities />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
