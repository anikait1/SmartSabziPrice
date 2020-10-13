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
      coordinates: "",
      city: "Chandigarh",
      state: "Punjab",
      userId: "5f7b45788bbc5138dc7d9ab7",
      itemId: "5f7b017009286604eee346a5",
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

    if (!navigator.geolocation) {
      console.log("Geolocation is not supported");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            coordinates: [position.coords.latitude, position.coords.longitude],
          });
        },
        () => {
          console.log("Please Provide access to location for you Posting");
        }
      );
    }

    const pricePost = {
      itemBill: {
        price: +this.state.price,
        rating: +this.state.rating,
        quantity: +this.state.quantity,
        quantityType: this.state.quantityType,
      },
      location: {
        position: {
          type: "Point",
          coordinates: this.state.coordinates,
        },
        city: this.state.city,
        state: this.state.state,
      },
      userId: this.state.userId,
      itemId: this.state.itemId,
    };

    console.log(pricePost);

    axios
      .post("http://localhost:5000/pricePosts", pricePost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-row no-gutters">
            <div className="col-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">₹</span>
                </div>
                <input
                  type="number"
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  placeholder="Quantity"
                  value={this.state.quantity}
                  onChange={this.onChangeQuantity}
                ></input>
              </div>
            </div>
            <div className="col-4 my-3">
              <select
                className="custom-select"
                id="inputGroupSelect02"
                value={this.state.quantityType}
                onChange={this.onChangeQuantityType}
              >
                <option defaultValue>Units</option>
                <option value="Kilogram">Kilogram</option>
                <option value="Gram">Gram</option>
                <option value="Dozen">Dozen</option>
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

// import React from "react";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

// const InputForm = (props) => {
//   const [price, setPrice] = useState("");
//   const [rating, setRating] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [quantityType, setQuantityType] = useState("");
//   const [location, setLocation] = useState([]);
//   const [error, setError] = useState(null);
//   const [userId, setUserId] = useState('5f7b45788bbc5138dc7d9ab7');
//   const [itemId, seeItemId] = useState('5f7b017009286604eee346a5');

//   const submit = (event) => {
//     event.preventDefault();

//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported");
//     } else {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation([position.coords.latitude, position.coords.longitude]);
//         },
//         () => {
//           setError("Please Provide access to location for you Posting");
//         }
//       );
//     }

//     const pricePost = {

//       itemBill : {
//         price,
//         rating,
//         quantity,
//         quantityType
//       },
//       location,
//       userId,
//       itemId
//     };

//     console.log(pricePost);

//       axios
//       .post("http://localhost:5000/pricePosts", pricePost)
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <form onSubmit={submit}>
//         <div className="form-row no-gutters">
//           <div className="col-6">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">₹</span>
//               </div>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Price"
//                 value={price}
//                 onChange={(event) => setPrice(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">₹</span>
//               </div>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Ratings"
//                 value={rating}
//                 onChange={(event) => setRating(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-8 my-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">₹</span>
//               </div>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Quantity"
//                 value={quantity}
//                 onChange={(event) => setQuantity(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-4 my-3">
//             <select
//               className="custom-select"
//               id="inputGroupSelect02"
//               value={quantityType}
//               onChange={(event) => setQuantityType(event.target.value)}
//             >
//               <option defaultValue>Units</option>
//               <option value="1">Kilogram</option>
//               <option value="2">Gram</option>
//               <option value="3">Dozen</option>
//             </select>
//           </div>
//           <div className="col-12 mb-3">
//             <input
//               type="submit"
//               className="btn btn-primary btn-block"
//               name="Submit"
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InputForm;
