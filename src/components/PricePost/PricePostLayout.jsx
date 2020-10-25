import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PriceCard from "./PricePostCard";
import usePosition from "./usePosition";

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join("&");
};

const PriceCardLayout = ({ itemId }) => {
  const { latitude, longitude, locationError } = usePosition();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pricePosts, setPricePosts] = useState([]);

  useEffect(() => {
    const fetchPricePosts = async () => {
      const _apiHost = "http://localhost:5000";
      const url =
        _apiHost +
        "/pricePosts/items/" +
        itemId +
        "?" +
        objectToQueryString({ latitude: latitude, longitude: longitude });

      const response = await fetch(url);

      if (!response.ok) {
        setError(response.status);
        setIsLoaded(true);
        return;
      }

      setPricePosts(await response.json());
      setIsLoaded(true);
    };

    if (latitude && longitude && !locationError) {
      fetchPricePosts();
    }
  }, [latitude, longitude, locationError, itemId]);

  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row row-cols-1 row-cols-lg-3">
        {pricePosts.map((post, key) => (
          <div className="col mb-4" key={post._id}>
            <PriceCard
              user={post.userId}
              itemBill={post.itemBill}
              location={post.location}
              time={post.createdAt}
            />
          </div>
        ))}
      </div>
    );
  }
};

export default PriceCardLayout;
