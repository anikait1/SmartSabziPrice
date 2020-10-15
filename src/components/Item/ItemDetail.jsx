import React from "react";
import PricePostLayout from "../PricePost/PricePostLayout";
import PricePostInput from "../PricePost/PricePostInput";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/items/` + id)
      .then((res) => res.json())
      .then(
        (result) => {
          setItem(result);
        },
        (error) => {
          console.log(error);
        }
      );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img
            src={item.mainImgUrl}
            alt="Apple"
            className="img-fluid rounded shadow-sm"
          />
          <h2 className="mt-4 font-weight-bold">{item.name}</h2>
          <h5 className="my-2">Price - $10 per KG</h5>
          <p className="my-4 text-black-50">{item.description}</p>
          <PricePostInput />
        </div>
        <div className="col-12 col-lg-8">
          <PricePostLayout />
        </div>
      </div>
    </div>
  );
};

export default Details;
