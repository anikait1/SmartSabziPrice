import React from 'react'

export default function InputForm() {
    return (
        <div>
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
    )
}
