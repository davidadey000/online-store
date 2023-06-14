import Categories from "./categories";
import HeroSlideShow from "./heroSlideShow";
import { Container, Row, Col } from "react-bootstrap";
import HeroCard from "./heroCard";
import CategoriesBanner from "./categoriesBanner";
import { useState } from "react";

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
    // <Container
    //   onMouseLeave={handleMouseLeave}
    //   className="my-hero-section"
    //   as="section"
    //   fluid
    // >
    //   <Row className="my-row">
    //     <Col className="my-category-col">
    //       <Categories onCategoryHover={handleMouseEnter} />
    //     </Col>

    //     {hoveredCategory !== null ? (
    //       <Col   className="my-slide-col px-0"  >
    //         <CategoriesBanner  category={hoveredCategory} />
    //       </Col>
    //     ) : (
    //       <Col className="my-slide-col px-0" md={7}>
    //         <HeroSlideShow />
    //       </Col>
    //     )}

    //     <Col className="my-card-col ">
    //       {images.map((image, index) => {
    //         return <HeroCard key={index} image={image} />;
    //       })}
    //     </Col>
    //   </Row>
    // </Container>
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
