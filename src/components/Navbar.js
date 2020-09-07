import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-secondary">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </form>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">
              Vegetables
            </a>
            <a href="#" className="nav-item nav-link">
              Fruits
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                View By
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Name
                </a>
                <a href="#" className="dropdown-item">
                  Price
                </a>
                <a href="#" className="dropdown-item">
                  Cateogory
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">
              <i className="fa fa-user-plus" /> SignUp
            </a>
            <a href="#" className="nav-item nav-link">
              <i className="fa fa-user" /> Login
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
