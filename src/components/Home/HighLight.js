import React, { Component } from "react";

class HighLight extends Component {
  render() {
    return (
      <section
        className="ftco-section ftco-section-more img"
        style={{ backgroundImage: "url(/Assets/images/bg_5.jpeg)" }}
      >
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section ftco-animate">
              <h2>Express your style</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HighLight;
