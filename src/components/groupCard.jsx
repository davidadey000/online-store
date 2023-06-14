import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Row, ProgressBar } from "react-bootstrap";

const GroupCard = ({ price, description, imgUrl }) => {
  const [imageSrc, setImageSrc] = useState(imgUrl);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="group">
      <img
        src={imageSrc}
        alt=""
        className="group__image"
        onLoad={handleLoad}
        onError={() => setImageSrc("https://ng.jumia.is/cms/0-0-black-friday/2021/freelinks/plain-bg/phone-deals_260x144.png")}
      />
      <div className="group__footer">
        <small className="group__text">{description}</small>
      </div>
    </div>
  );
};

export default GroupCard;
