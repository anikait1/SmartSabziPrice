import React from "react";
import PriceCardLayout from "./PriceCardLayout";

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
          <h2 className="my-4">Apples</h2>
          <p className="my-2 text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            cupiditate a modi, adipisci ex totam, necessitatibus ullam voluptate
            exercitationem sapiente eligendi iure debitis hic alias aliquam
            voluptatibus voluptatum recusandae earum?
          </p>
        </div>
        <div className="col-12 col-lg-8">
          <PriceCardLayout />
        </div>
      </div>
    </div>
  );
};

export default Details;
