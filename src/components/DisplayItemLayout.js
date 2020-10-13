import DisplayItem from "./DisplayItem";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DisplayItemLayout = ({ itemCategory }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/items?category=${itemCategory}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [itemCategory]);

  if (error) {
    return <div className="text-danger">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-6">
        {items.map((item) => (
          <div className="col mb-4" key={item._id}>
            <DisplayItem
              name={item.name}
              imgSrc={item.displayImgUrl}
              calorieCount={item.nutrition.calories}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default DisplayItemLayout;
