import ItemCard from "./ItemCard";
import React, { useState, useEffect } from "react";
import request from "../../api/Fetch";

const ItemLayout = ({ itemCategory }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    request("/items", { category: itemCategory })
      .then((res) => res.json())
      .then(
        (items) => {
          setIsLoaded(true);
          setItems(items);
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
            <ItemCard
              id={item._id}
              name={item.name}
              imgLink={item.displayImgUrl}
              calorieCount={item.nutrition.calories}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default ItemLayout;
