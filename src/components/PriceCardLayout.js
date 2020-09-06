import React from "react";
import PriceCard from "./PriceCard";

const items = [
  {
    userImage: "https://www.w3schools.com/w3images/avatar2.png",
    userName: "Anikait",
    date: "13/09/20",
    location: "Sector 37, Chandigarh",
    time: "3:00PM",
  },
  {
    userImage: "https://www.w3schools.com/w3images/avatar2.png",
    userName: "CU Anikait",
    date: "13/09/20",
    location: "Sector 13, Chandigarh",
    time: "8:30PM",
  },
  {
    userImage: "https://www.w3schools.com/w3images/avatar2.png",
    userName: "Not Anikait",
    date: "11/09/20",
    location: "Sector 11, Chandigarh",
    time: "6:30AM",
  },
];

const PriceCardLayout = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-2">
      {items.map((item, key) => (
        <div className="col mb-4">
          <PriceCard
            userName={item.userName}
            userImage={item.userImage}
            date={item.date}
            location={item.location}
            time={item.time}
            key={key}
          />
        </div>
      ))}
    </div>
  );
};

export default PriceCardLayout;