import HeroSection from "../components/heroSection";
import CollectionList from "../components/CollectionList";
import About from "../components/about";
import Footer from "../components/footer";

const Home = () => {
  console.log("Home component rendered");
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
