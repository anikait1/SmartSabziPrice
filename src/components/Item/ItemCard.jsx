import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const ItemCard = ({ id, name, calorieCount, imgLink }) => {
  return (
    <div className="card border-white shadow-sm bottom-rounded-border top-rounded-border">
      <img
        src={imgLink}
        alt={name}
        className="card-img-top top-rounded-border"
      />
      <div className="card-body text-center p-2">
        <h6 className="card-title font-weight-bold my-1">{name}</h6>
        <div className="card-text text-black-50 small">
          Calories - {calorieCount}
        </div>
      </div>
      <Link to={"/details/" + id}>View More</Link>
    </div>
  );
};

export default ItemCard;
