import React from "react";

const SplitRow = ({ iconOne, iconOneText, iconTwo, iconTwoText }) => {
  return (
    <div className="row no-gutters align-items-center">
      <div className="col-5">
        <i className={`fas fa-${iconOne} mx-2`}></i>
        <span className="small font-weight-bold">{iconOneText}</span>
      </div>
      <div className="col-7 my-1">
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
      <span className="small font-weight-bold">{bottomText}</span>
    </div>
  );
};

const PriceCard = ({ userImage, userName, date, location, time }) => {
  return (
    <div className="card shadow-sm rounded rounded-lg border-0">
      <div className="row no-gutters align-items-center">
        
        <div className="col-4">
          <img src={userImage} alt="User" className="img-fluid" />
        </div>
        <InfoColumn
          icon="money-bill-alt"
          iconText="12"
          bottomText="$"
          color="success"
        />
        <InfoColumn
          icon="shopping-bag"
          iconText="2"
          bottomText="Dozen"
          color="primary"
        />
        <InfoColumn
          icon="star"
          iconText="3.5"
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
            iconOneText={date}
            iconTwo="compass"
            iconTwoText={location}
          />

          <SplitRow
            iconOne="user"
            iconOneText={userName}
            iconTwo="clock"
            iconTwoText={time}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
