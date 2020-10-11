import React, { Component } from "react";
import axios from "axios";

export default class InputForm extends Component {
  constructor(props) {
    super();

    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeQuantityType = this.onChangeQuantityType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      price: "",
      rating: "",
      quantity: "",
      quantityType: "",
    };
  }

  onChangePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  onChangeRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }
  onChangeQuantity(event) {
    this.setState({
      quantity: event.target.value,
    });
  }
  onChangeQuantityType(event) {
    this.setState({
      quantityType: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const PricePost = {
      price: this.state.price,
      rating: this.state.rating,
      quantity: this.state.quantity,
      quantityType: this.state.quantityType,
    };

    console.log(PricePost);

    axios
      .post("http://localhost:5000/pricePosts", PricePost)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <div className="form-row no-gutters">
            <div className="col-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">₹</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Price"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">₹</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Ratings"
                  value={this.state.rating}
                  onChange={this.onChangeRating}
                ></input>
              </div>
            </div>
            <div className="col-8 my-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">₹</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  value={this.state.quantity}
                  onChange={this.onChangeQuantity}
                ></input>
              </div>
            </div>
            <div className="col-4 my-3">
              <select
                class="custom-select"
                id="inputGroupSelect02"
                value={this.state.quantityType}
                onChange={this.onChangeQuantityType}
              >
                <option selected>Units</option>
                <option value="1">Kilogram</option>
                <option value="2">Gram</option>
                <option value="3">Dozen</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                name="Submit"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// import React from 'react'
// import axios from 'axios';
// import { useState } from "react";
// import { useEffect } from "react";

// const InputForm  = (props) => {

//     const [pricepost, setPricePost] = useState(props.pricepost);

//     const submit = event => {

//         event.preventDefault()

//         axios('https://localhost:5000/pricePosts', pricepost)
//         .then(res => console.log(res.data));

//     }

//     return (
//         <div>
//             <form onSubmit = {submit}>
//             <div className="form-row no-gutters">
//               <div className="col-6">
//                 <div className="input-group">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text">₹</span>
//                   </div>
//                   <input
//                     type="number"
//                     class="form-control"
//                     placeholder="Price"
//                     value = {pricepost.price}
//                     onChange = {event => setPricePost({...pricepost, price : event.target.value})}
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="input-group">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text">₹</span>
//                   </div>
//                   <input
//                     type="number"
//                     class="form-control"
//                     placeholder="Ratings"
//                     value = {pricepost.rating}
//                     onChange = {event => setPricePost({...pricepost, rating : event.target.value})}
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-8 my-3">
//                 <div className="input-group">
//                   <div className="input-group-prepend">
//                     <span className="input-group-text">₹</span>
//                   </div>
//                   <input
//                     type="number"
//                     class="form-control"
//                     placeholder="Quantity"
//                     value = {pricepost.quantity}
//                     onChange = {event => setPricePost({...pricepost, quantity : event.target.value})}
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-4 my-3">
//                 <select class="custom-select" id="inputGroupSelect02">
//                   <option selected>Units</option>
//                   <option value="1">Kilogram</option>
//                   <option value="2">Gram</option>
//                   <option value="3">Dozen</option>
//                     value = {pricepost.quantityType}
//                     onChange = {event => setPricePost({...pricepost, quantityType : event.target.value})}
//                 </select>
//               </div>
//               <div className="col-12 mb-3">
//                 <input type="submit" className="btn btn-primary btn-block" name="Submit" />
//               </div>
//             </div>
//           </form>
//         </div>
//     )
// }

// export default InputForm;
