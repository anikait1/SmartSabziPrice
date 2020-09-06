import React from "react";

const PriceCard = ({userImage, userName, date, location, time}) => {
  return (
    <div className="card shadow rounded rounded-lg border-0">
      <div className="row no-gutters align-items-center">
        <div className="col-12 py-2 bg-light">
          <div className="row no-gutters">
            <div className="col-6">
              <i class="far fa-user mx-2"></i>
              <span>{userName}</span>
            </div>
            <div className="col-6 text-right">
              <i class="far fa-calendar-minus"></i>
              <span className="mx-2">{date}</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img src={userImage} alt="User" width="100" height="100" />
        </div>
        <div className="col-5">
          <h6 className="my-0">Price &#8212; &#8377; 50</h6>
          <h6 className="my-1">Quantity &#8212; 3kg</h6>
          <h6 className="my-0">Rating &#8212; 3.5</h6>
        </div>
        <div className="col-3 text-center">
          <i className="fas fa-chevron-up fa-lg d-block text-success"></i>
          <p className="my-0 font-weight-bold text-success my-2">+12</p>
          <i className="fas fa-chevron-down fa-lg d-block text-danger"></i>
        </div>
        <div className="col-12 bg-light py-2">
          <div className="row no-gutters justify-content-between">
            <div className="col-7">
              <i class="fas fa-map-marker-alt mx-2"></i>
              <span>{location}</span>
            </div>
            <div className="col-5 text-right">
              <i class="far fa-clock"></i>
              <span className="mx-2">{time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
