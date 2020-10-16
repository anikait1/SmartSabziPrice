import ItemCard from "./ItemCard";
import React, { useState, useEffect } from "react";

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

const ItemLayout = ({ itemCategory }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const _apiHost = "http://localhost:5000";
      const url = _apiHost + "/items?" + objectToQueryString({category: itemCategory});
      // console.log(url);
      
      const response = await fetch(url);

      if (!response.ok) {
        setIsLoaded(true);
        setError(response.status);
        return;
      }

      setItems(await response.json());
      setIsLoaded(true);
    };

    fetchItems();
  }, [itemCategory]);

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
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
