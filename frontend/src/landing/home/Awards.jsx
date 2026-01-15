import React from "react";
import largestBroker from "../../assets/largestBroker.svg";
import pressLogos from "../../assets/pressLogos.png";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={largestBroker} alt="largestBroker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock Broker in india</h1>
          <p className="mb-5">
            We are the largest stock broker in india.there are many variations
            of passages of Lorem Ipsum available
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>comidity Derivatives</p>
                </li>
                <li>
                  <p>Current Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stock & Ipo</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government securities </p>
                </li>
              </ul>
            </div>
          </div>
          <img src={pressLogos} style={{ width: "90%" }} alt="pressLogos" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
