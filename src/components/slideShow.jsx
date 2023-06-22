import {Carousel} from "react-responsive-carousel";
import { Link } from "react-router-dom";

const SlideShow = ({slideImages}) => {
  return (
    <Link to="/products/special">
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
            {slideImages.map((item, index) => (
              <img
                key={index}
                src={item.ImgUrl}
                alt={item.caption}
                className="carousel__image"
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Link>
  );
};

export default SlideShow;
