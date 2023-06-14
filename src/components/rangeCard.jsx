const RangeCard = ({ description, imgUrl }) => {
  return (
    <div className="range">
      <img src={imgUrl} alt="" className="range__image" />
      <div className="range__footer">
        <small className="range__text">{description}</small>
      </div>
    </div>
  );
};

export default RangeCard;
