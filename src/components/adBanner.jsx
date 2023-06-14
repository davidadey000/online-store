import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/img/carousel-1.jpg";

const AdBanner = () => {
  return (
    <Container className="adbanner" fluid>
      <Row className="adbanner__row">
        <Col className="adbanner__col">
          <Card>
            <Card.Body className="adbanner__body">
              <Card.Img
                style={{ borderRadius: "0px" }}
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1677056046/contentservice/Home.jpg_S1rNdUXRs.jpg"
                alt=""
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="adbanner__col">
          <Card>
            <Card.Body className="adbanner__body">
              <Card.Img
                style={{ borderRadius: "0px" }}
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1676972108/contentservice/Phone.jpg_By78lfGRo.jpg"
                alt=""
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdBanner;
