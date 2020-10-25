import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const ItemCard = ({ id, name, calorieCount, imgLink }) => {
  return (
    <div className="card shadow-sm">
      <img src={imgLink} alt={name} className="card-img-top" />
      <div className="card-body text-center p-2">
        <h6 className="card-title font-weight-bold my-2">{name}</h6>
        <Link to={"details/" + id} className="btn btn-info btn-sm btn-block">
          Find Price
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
