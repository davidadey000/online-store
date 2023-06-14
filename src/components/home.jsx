import HeroSection from "./heroSection";
import CollectionList from "./collectionList";
import About from "./about";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CollectionList />

      <div style={{ height: "30vh", backgroundColor: "tomato" }}></div>
      <About />
    </div>
  );
};

export default Home;
