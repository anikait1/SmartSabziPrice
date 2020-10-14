import React from "react";
import PricePostLayout from "../PricePost/PricePostLayout";
import PricePostInput from '../PricePost/PricePostInput';

const Details = () => {
  const imgLink =
    "https://images.unsplash.com/photo-1474564862106-1f23d10b9d72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1368&q=80";

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img
            src={imgLink}
            alt="Apple"
            className="img-fluid rounded shadow-sm"
          />
          <h2 className="mt-4 font-weight-bold">Apples</h2>
          <h5 className="my-2">Price - $10 per KG</h5>
          <p className="my-4 text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            cupiditate a modi, adipisci ex totam, necessitatibus ullam voluptate
            exercitationem sapiente eligendi iure debitis hic alias aliquam
            voluptatibus voluptatum recusandae earum?
          </p>
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
