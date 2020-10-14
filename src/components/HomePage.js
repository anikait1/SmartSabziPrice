import React, { Component } from "react";
import ItemLayout from "../components/Item/ItemLayout";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <ItemLayout itemCategory="Fruit" />
      </div>
    );
  }
}
