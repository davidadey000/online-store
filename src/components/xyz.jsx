import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, CardGroup } from "react-bootstrap";
import ProductCard from "./ProductCard";
import RangeCard from "./RangeCard";
import GroupCard from "./GroupCard";
import SlideShow from "./SlideShow";
import { useState, useEffect } from "react";

const Collection = ({
  type,
  slideImages,
  groupName,
  products,
  groups,
  headerColor,
  textColor,
}) => {
  const [value, setValue] = useState(0);

  let class1 = "";
  let class2 = "";
  class1 += value === 1 ? "p-0" : "";
  class2 += (value === 1) | (value === 2) ? "text-center" : "";
  useEffect(() => {
    if (type === "slideshow") {
      setValue(1);
    } else if (type === "price-points") {
      setValue(2);
    } else if (type === "product") {
      setValue(0)
    }
  }, [type]);

  return type === "category" ? (
    <Card className="mx-auto col-md-12 m-3" style={{ width: "92%" }}>
     {groupName === ""?  <Card.Header
        as="h5"
        className="text-center  d-none"
        style={{ backgroundColor: headerColor, color: textColor }}
      >
        {groupName}
      </Card.Header> :  <Card.Header
        as="h5"
        className="text-center"
        style={{ backgroundColor: headerColor, color: textColor }}
      >
        {groupName}
      </Card.Header>}
      <Card.Body className="">
        <CardGroup className="">
          <Row xs={1} md={6} className="g-2">
            {groups.map((deal, index) => {
              return <GroupCard key={index} {...deal} />;
            })}
          </Row>
        </CardGroup>
      </Card.Body>
    </Card>
  ) : (
    <Card className="mx-auto col-md-12 m-3" style={{ width: "92%" }}>
      <Card.Header
        as="h5"
        className={class2}
        style={{ backgroundColor: headerColor, color: textColor }}
      >
        {groupName}
      </Card.Header>
      <Card.Body className={class1}>
        <CardGroup className="">
          {type === "price-points" ? (
            products.map((deal, index) => {
              return <RangeCard key={index} {...deal} />;
            })
          ) : type === "product" ? (
            products.map((deal, index) => {
              return <ProductCard key={index} {...deal} />;
            })
          ) : (
            <SlideShow{...slideImages} />
          )}
        </CardGroup>
      </Card.Body>
    </Card>
  );
};

export default Collection;
