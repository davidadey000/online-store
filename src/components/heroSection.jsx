import Categories from "./categories";
import HeroSlideShow from "./heroSlideShow";
import HeroCard from "./heroCard";
import CategoriesBanner from "./categoriesBanner";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const images = [
    "https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png",
    "https://ng.jumia.is/cms/0-1-cpr/2022/june-14/free-delivery_218x184.png",
  ];

  return (
    <div onMouseLeave={handleMouseLeave}>
      <Categories onCategoryHover={handleMouseEnter} />
      <div className="hero-section--bottom">
        {hoveredCategory !== null ? (
          <CategoriesBanner category={hoveredCategory} />
        ) : (
          <div className="hero-section__slide">
              <HeroSlideShow />
          </div>
        )}

        <div className="hero-section__card">
          {images.map((image, index) => {
            return (
              <HeroCard
                onHeroCardEnter={handleMouseLeave}
                key={index}
                image={image}
              />
            );
          })}
        </div>

        <div className="hero-section__card hero-section__card--second">
          {images.map((image, index) => {
            return <HeroCard key={index} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
