import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, CardGroup } from "react-bootstrap";
import FlashSalesCard from "./flashSalesCard";
import ItemCard from "./itemCard"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const FlashSales = () => {
  const deals = [
    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
    },

    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
    },
    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
    },

    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
    },

    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
    },

    {
      price: "₦150.00",
      description: "Design & Development",
      imgUrl:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
    },
  ];

  return (
    <Card className="my-collection mx-auto col-md-12 m-3">
      <Card.Header className="text-center"
        as="h5"
        style={{ backgroundColor: "tomato", color: "white" }}
      >
        Flash Sales
      </Card.Header>
      <Card.Body className="px-0 py-2">
        <Row xs={2} md={6}>
          {deals.map((deal, index) => {
            return <FlashSalesCard key={index} {...deal} />;
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FlashSales;
