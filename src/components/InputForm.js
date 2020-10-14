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
            .post("http://localhost:5000/pricePosts", { pricePost })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        },
        () => {
          console.log("Please Provide access to location for you Posting");
        }
      );
    }
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
                  min="1"
                  required={true}
                  value={this.state.price}
                  onChange={this.onChangePrice}
                ></input>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Ratings"
                  required={true}
                  min="1"
                  max="5"
                  value={this.state.rating}
                  onChange={this.onChangeRating}
                ></input>
              </div>
            </div>
            <div className="col-6 my-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  required={true}
                  min="1"
                  value={this.state.quantity}
                  onChange={this.onChangeQuantity}
                ></input>
              </div>
            </div>
            <div className="col-6 my-3">
              <select
                className="custom-select"
                id="inputGroupSelect02"
                required={true}
                value={this.state.quantityType}
                onChange={this.onChangeQuantityType}
              >
                <option value="" disabled defaultValue>
                  Select Unit
                </option>
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


//With hooks not completed

// import React from "react";
// import axios from "axios";
// import { useState } from "react";

// const InputForm = (props) => {
//   const [price, setPrice] = useState(null);
//   const [rating, setRating] = useState(null);
//   const [quantity, setQuantity] = useState(null);
//   const [quantityType, setQuantityType] = useState("");
//   const [coordinates, setCoordinates] = useState([]);
//   const [city, setCity] = useState("Chandigarh");
//   const [state, setState] = useState("Punjab");
//   const [userId, setUserId] = useState("5f7b45788bbc5138dc7d9ab7");
//   const [itemId, seeItemId] = useState("5f7b017009286604eee346a5");

//   const submit = (event) => {
//     event.preventDefault();

//     if (!navigator.geolocation) {
//       console.log("Geolocation is not supported");
//     } else {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCoordinates([position.coords.latitude, position.coords.longitude]);

//           const pricePost = {
//             itemBill: {
//               price,
//               rating,
//               quantity,
//               quantityType,
//             },
//             location: {
//               position: {
//                 type: "Point",
//                 coordinates,
//               },
//               city,
//               state,
//             },
//             userId,
//             itemId,
//           };

//           console.log(pricePost);

//           axios
//             .post("http://localhost:5000/pricePosts", pricePost)
//             .then((res) => console.log(res.data))
//             .catch((err) => console.log(err));
//         },
//         () => {
//           console.log("Please Provide access to location for you Posting");
//         }
//       );
//     }
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
//                 min="1"
//                 required={true}
//                 value={price}
//                 onChange={(event) => setPrice(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <i className="fa fa-star-o" aria-hidden="true"></i>
//                 </span>
//               </div>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Ratings"
//                 required={true}
//                 min="1"
//                 max="5"
//                 value={rating}
//                 onChange={(event) => setRating(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-6 my-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
//                 </span>
//               </div>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Quantity"
//                 required={true}
//                 min="1"
//                 value={quantity}
//                 onChange={(event) => setQuantity(event.target.value)}
//               ></input>
//             </div>
//           </div>
//           <div className="col-6 my-3">
//             <select
//               className="custom-select"
//               id="inputGroupSelect02"
//               required={true}
//               value={quantityType}
//               onChange={(event) => setQuantityType(event.target.value)}
//             >
//               <option value="" disabled defaultValue>
//                 Select Unit
//               </option>
//               <option value="Kilogram">Kilogram</option>
//               <option value="Gram">Gram</option>
//               <option value="Dozen">Dozen</option>
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
