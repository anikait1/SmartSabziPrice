import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PriceCard from "./PriceCard";
import usePosition from "./usePosition";

const PriceCardLayout = () => {
  // const { latitude, longitude, locationError } = usePosition();
  const [location, setLocation] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      setIsLoaded(true);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          setError("Unable to retrieve location");
          setIsLoaded(true);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (location.length !== 0) {
      console.log("Something");
      fetch(
        `http://localhost:5000/pricePosts/items/5f7b017009286604eee346a5?latitude=${location[0]}&longitude=${location[1]}`
      )
        .then((res) => res.json())
        .then((result) => {
          setPosts(result);
          setIsLoaded(true);
        });
    }
  }, [location]);

  /*
  useEffect(() => {
    if (latitude && longitude && !locationError) {
      fetch(
        `http://localhost:5000/pricePosts/items/5f7b017009286604eee346a5?latitude=${latitude}&longitude=${longitude}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setPosts(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(true);
          }
        );
    }
  }, [latitude, longitude, locationError]);
  console.log(locationError);
*/
  if (error) {
    return <div className="text-danger">Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row row-cols-1 row-cols-lg-2">
        {posts.map((post, key) => (
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
