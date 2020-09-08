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
          <h2 className="mt-4 font-weight-bold">Apples</h2>
          <h5 className="my-2">Price - $10 per KG</h5>
          <p className="my-4 text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            cupiditate a modi, adipisci ex totam, necessitatibus ullam voluptate
            exercitationem sapiente eligendi iure debitis hic alias aliquam
            voluptatibus voluptatum recusandae earum?
          </p>
          <form>
            <div className="form-row no-gutters">
              <div className="col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Price"
                  ></input>
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Ratings"
                  ></input>
                </div>
              </div>
              <div className="col-8 my-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Quantity"
                  ></input>
                </div>
              </div>
              <div className="col-4 my-3">
                <select class="custom-select" id="inputGroupSelect02">
                  <option selected>Units</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 mb-3">
                <button className="btn btn-primary btn-block">Confirm</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-8">
          <PriceCardLayout />
        </div>
      </div>
    </div>
  );
};

export default Details;
