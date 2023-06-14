import {Carousel} from "react-responsive-carousel";

// const items = [
//   {
//     imageUrl:
//       "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/pernod-ricard/Desktop_homepage_slider__712x384_(Shop_Now).jpg",
//     caption: "First image",
//   },
//   {
//     imageUrl:
//       "https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w8-Budget-phones/Desktop_Homepage_Slider__712x384.jpg",
//     caption: "Second image",
//   },
//   {
//     imageUrl:
//       "https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/Slider.png",
//     caption: "Third image",
//   },

//   {
//     imageUrl: "https://ng.jumia.is/cms/0-5-TechWeek/2023/660x330_2.png",
//     caption: "Fourth image",
//   },
// ];

const SlideShow = ({slideImages}) => {
  return (
    // <Card className="collection">
    //   <Card.Header
    //     className="collection__h--center"
    //     as="h5"
    //   >
    //     Our Official Store
    //   </Card.Header>
    //   <Card.Body className="collection__body--slide">
    //     <Carousel fade>
    //       <Carousel.Item >
    //         <img className="collection__image" src={ImgUrl1} alt="First slide" />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className="collection__image" src={ImgUrl2} alt="Second slide" />
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img className="collection__image" src={ImgUrl3} alt="Third slide" />
    //       </Carousel.Item>
    //     </Carousel>
    //   </Card.Body>
    // </Card>

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
  );
};

export default SlideShow;
