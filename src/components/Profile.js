import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const dummyUser =
      "data:image/png;base64,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";

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
