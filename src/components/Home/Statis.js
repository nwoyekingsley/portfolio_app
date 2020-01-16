import React, { Component } from "react";
import { Link } from "react-router-dom";

class Statis extends Component {
  render() {
    return (
      <div>
        <div
          className="hero-wrap js-fullheight"
          style={{ backgroundImage: 'url("/Assets/images/bg_11.jpg")' }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <h3 className="v">Goterem - Time to style up</h3>
              <h3 className="vr"></h3>
              <div className="col-md-11 ftco-animate text-center">
                <h1>The Stylist</h1>
                <h2>
                  <span>Style up</span>
                </h2>
              </div>
              <div className="mouse">
                <Link to="#" className="mouse-icon">
                  <div className="mouse-wheel">
                    <span className="ion-ios-arrow-down" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="goto-here" />
      </div>
    );
  }
}

export default Statis;
