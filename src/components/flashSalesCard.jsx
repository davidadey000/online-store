import Card from "react-bootstrap/Card";
import { Col, Row, ProgressBar } from "react-bootstrap";

const FlashSalesCard = ({ price, description, imgUrl }) => {
  
  const now = 60;
  return (
    <Col>
      {/* <Card border="light" style={{ width: "20rem", margin:"10px" }}>
    <Card.Img variant="top" src={imgUrl}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card> */}
      <Card border="light" style={{ width: "96%"}}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Text className="my-0" style={{fontSize: "12px"}}>{description}</Card.Text>
          <Card.Title  style={{fontSize: "16px", paddingTop: "3px"}}>{price}</Card.Title>
        </Card.Body>
        <Card.Footer style={{backgroundColor: "white"}}> <ProgressBar variant="danger" now={now} label={`${now}%`} visuallyHidden />
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default FlashSalesCard;
