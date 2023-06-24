import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextContentLoader from "./TextContentLoader";

const SlideShow = ({ slideImages }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async (imgUrl) => {
      const image = new Image();
      image.src = imgUrl;
      await image.decode();
      setIsLoading(false);
    };

    slideImages.forEach((item) => {
      loadImage(item.ImgUrl);
    });
  }, [slideImages]);

  return (
    <div className="carousel-block">
      <div className="carousel__header">
        <h4 className="carousel__text">Our Official Store</h4>
      </div>
      <div className="carousel__body">
        <Carousel
          autoPlay={true}
          interval={5000}
          showArrows={false}
          transitionTime={1000}
          emulateTouch={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
        >
          {slideImages.map((item, index) =>
            isLoading ? (
              <TextContentLoader
                key={index}
                width="100%"
                height="100%"
              ></TextContentLoader>
            ) : (
              <img
                key={index}
                src={item.ImgUrl}
                alt={item.caption}
                className="carousel__image"
              />
            )
          )}
        </Carousel>{" "}
      </div>
    </div>
  );
};

export default SlideShow;
