import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, CardGroup } from "react-bootstrap";
import ProductCard from "./productCard";
import RangeCard from "./rangeCard";
import GroupCard from "./groupCard";
import SlideShow from "./slideShow";
import { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import ObjectNotFound from "./ObjectNotFound";
import apiUrl from "../utils/config";
import axios from "axios";

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



  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesNotFound, setCategoriesNotFound] = useState(false);

  const fetchCategoriesData = () => {
    axios
      .get(`${apiUrl}categories/`)
      .then((response) => {
        setCategoriesData(response.data); 
        setIsLoading(false)
        setCategoriesNotFound(false)
      })
      .catch((error) => {
        if (error.response.status === "404") {
          setCategoriesNotFound(true);
        } else {
          console.error(error);
        }
      });
  };


  useEffect(() => {
    fetchCategoriesData();
  }, []);

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

  if(isLoading){
    return <SkeletonLoader/>
  }

  if(categoriesNotFound){
    return <ObjectNotFound title="category"/>
  }

  const groupsCount = Math.ceil(categoriesData.length / groupSize);
  const groupsArr = Array.from({ length: groupsCount }, (_, i) =>
    categoriesData.slice(i * groupSize, (i + 1) * groupSize)
  );
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
