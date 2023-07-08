import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideShow = ({ slideImages }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async (image) => {
      const img = new Image();
      img.src = image;
      await img.decode();
      setIsLoading(false);
    };

    slideImages.forEach((item) => {
      loadImage(item.image);
    });
  }, [slideImages]);

  return (
    <div className="carousel-block">
      <div className="rounded-t-md bg-gray-800 text-white flex justify-center w-full px-3 py-2">
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
          {slideImages.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.caption}
              className="carousel__image"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SlideShow;
