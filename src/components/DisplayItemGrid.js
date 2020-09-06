import DisplayItem from "./DisplayItem";
import React from "react";

const items = [
  {
    name: "Banana",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    price: 10,
  },
  {
    name: "Apple",
    img: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxOTMzfQ&auto=format&fit=crop&w=1350&q=80",
    price: 20,
  },
  {
    name: "Pear",
    img: "https://images.unsplash.com/photo-1540486117437-8946eede5364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    price: 50,
  },
];

const DisplayItemGrid = () => {
  return (
    <div className="row row-cols-2 row-cols-sm-4 row-cols-lg-6">
      {items.map((item) => (
        <div className="col mb-4">
          <DisplayItem name={item.name} imgSrc={item.img} price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default DisplayItemGrid;
