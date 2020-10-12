import React from "react";

// Helper Components
const SplitRow = ({ iconOne, iconOneText, iconTwo, iconTwoText }) => {
  return (
    <div className="row no-gutters align-items-center">
      <div className="col-6">
        <i className={`fas fa-${iconOne} mx-2`}></i>
        <span className="small font-weight-bold">{iconOneText}</span>
      </div>
      <div className="col-6 my-1">
        <i className={`fas fa-${iconTwo} mx-2`}></i>
        <span className="small font-weight-bold">{iconTwoText}</span>
      </div>
    </div>
  );
};

const InfoColumn = ({ icon, iconText, bottomText, color }) => {
  return (
    <div className="col-2 text-center">
      <i className={`fas fa-${icon} fa-xs text-${color}`}></i>
      <h6 className={`my-1 font-weight-bold text-${color}`}>{iconText}</h6>
      <span className={`small font-weight-bold text-${color}`}>{bottomText}</span>
    </div>
  );
};

// Main Component
const PriceCard = ({ user, itemBill, location, time }) => {
  return (
    <div className="card shadow-sm rounded rounded-lg border-0">
      <div className="row no-gutters align-items-center">
        <div className="col-4">
          <img src={user.imgLink} alt="User" className="img-fluid" />
        </div>
        <InfoColumn
          icon="money-bill-alt"
          iconText={itemBill.price}
          bottomText="$"
          color="success"
        />
        <InfoColumn
          icon="shopping-bag"
          iconText={itemBill.quantity}
          bottomText={itemBill.quantityType}
          color="primary"
        />
        <InfoColumn
          icon="star"
          iconText={itemBill.rating}
          bottomText="Stars"
          color="warning"
        />
        <div className="col-2 text-center">
          <i className="fas fa-chevron-up fa-lg d-block text-success"></i>
          <p className="my-0 font-weight-bold text-success my-2">+12</p>
          <i className="fas fa-chevron-down fa-lg d-block text-danger"></i>
        </div>

        <div className="col-12 bg-light py-2">
          <SplitRow
            iconOne="calendar-minus"
            iconOneText={time.split("T")[0]}
            iconTwo="compass"
            iconTwoText={`${location.pincode}, ${location.city}`}
          />

          <SplitRow
            iconOne="user"
            iconOneText={user.username}
            iconTwo="clock"
            iconTwoText={time.split("T")[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
