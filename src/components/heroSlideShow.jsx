import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextContentLoader from "./TextContentLoader";

const items = [
  {
    imageUrl:
      "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/pernod-ricard/Desktop_homepage_slider__712x384_(Shop_Now).jpg",
    caption: "First image",
  },
  {
    imageUrl:
      "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w8-Budget-phones/Desktop_Homepage_Slider__712x384.jpg",
    caption: "Second image",
  },
  {
    imageUrl:
      "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/Slider.png",
    caption: "Third image",
  },
  {
    imageUrl: "https://ng.jumia.is/cms/0-5-TechWeek/2023/660x330_2.png",
    caption: "Fourth image",
  },
];

function HeroSlideShow() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async (imageUrl) => {
      const image = new Image();
      image.src = imageUrl;
      await image.decode();
      setIsLoading(false);
    };

    items.forEach((item) => {
      loadImage(item.imageUrl);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <TextContentLoader width="100%" height="100%" />
      ) : (
        <Carousel
          autoPlay={true}
          interval={5000}
          showArrows={false}
          transitionTime={1000}
          emulateTouch={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          style={{ width: "40%" }}
        >
          {items.map((item, index) => (
            <img
              key={index}
              src={item.imageUrl}
              alt={item.caption}
              className="hero-slide__image"
            />
          ))}
        </Carousel>
      )}
    </>
  );
}

export default HeroSlideShow;
