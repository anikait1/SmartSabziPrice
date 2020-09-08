import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const dummyUser = "https://www.w3schools.com/w3images/avatar2.png";

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <center>
                      <img width="100px" src={dummyUser} />
                    </center>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <center>
                      <h4>Your Name</h4>
                      <input type="file" id="inputProfile" />
                      <span>Account Status - </span>
                      <label className="badge badge-pill badge-info">
                        Your Status
                      </label>
                    </center>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Full Name</label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>Age</label>
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Contact No</label>
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control"
                        placeholder="Contact No"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label>Email ID</label>
                    <div className="form-group">
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>State</label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>City</label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Pincode</label>
                    <div className="form-group">
                      <input
                        type="Number"
                        className="form-control"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Gender </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="genderChoice"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="genderChoice"
                        id="inlineCheckbox2"
                        defaultValue="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="genderChoice"
                        id="inlineCheckbox3"
                        defaultValue="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                      >
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <center>
                      <span className="badge badge-pill badge-info">
                        Login Credentials
                      </span>
                    </center>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Email ID</label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Old Password</label>
                    <div className="form-group">
                      <input
                        type="Password"
                        className="form-control"
                        placeholder="Old Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>New Password</label>
                    <div className="form-group">
                      <input
                        type="Password"
                        className="form-control"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8 mx-auto">
                    <center>
                      <div className="form-group">
                        <button className="btn btn-primary btn-block btn-lg">
                          Update
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <a href="#"> Back to Home</a>
            <br />
          </div>
          {/* <div class="col-md-7">
             Comments card to be added      
         </div> */}
        </div>
      </div>
    );
  }
}
