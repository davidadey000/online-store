import { useState, useEffect } from "react";
import RangeCard from "./rangeCard";

const RangeCollection = ({
  type,
  slideImages,
  collectionName,
  products,
  groups,
  headerColor,
  textColor,
}) => {
  const [numCols, setNumCols] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setNumCols(window.innerWidth >= 768 && window.innerWidth < 1023 ? 4 : window.innerWidth > 1023 && window.innerWidth < 1200 ? 5: 6);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ranges">
      <div className="ranges__header p-2">
        <h4 className="ranges__text">{collectionName}</h4>
      </div>
      <div className="ranges__body">
        {products.slice(0, numCols).map((deal, index) => {
          return <RangeCard key={index} {...deal} />;
        })}
      </div>
    </div>
  );
};

export default RangeCollection;
