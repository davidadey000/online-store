import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, CardGroup } from "react-bootstrap";
import ProductCard from "./productCard";
import RangeCard from "./rangeCard";
import GroupCard from "./groupCard";
import SlideShow from "./slideShow";
import { useState, useEffect } from "react";

const CategoryCollection = ({
  type,
  slideImages,
  collectionName,
  products,
  groups,
  headerColor,
  textColor,
  groupSize = 12, // default group size is 12
}) => {
  const [numCols, setNumCols] = useState(6);

  const groupsCount = Math.ceil(groups.length / groupSize);
  const groupsArr = Array.from({ length: groupsCount }, (_, i) =>
    groups.slice(i * groupSize, (i + 1) * groupSize)
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setNumCols(5);
      } else {
        setNumCols(6);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {groupsArr.map((group, index) => (

        <div key={index} className="groups">
          {index === 0 && (
            <div className="groups__header p-2">
              <h4 className="groups__text">{collectionName}</h4>
            </div>
          )}

          <div className="groups__body">
            {group.slice(0, numCols * 2).map((deal, index) => {
              return <GroupCard key={index} {...deal} />;
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryCollection;
