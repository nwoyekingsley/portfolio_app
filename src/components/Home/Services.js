import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="ftco-section bg-light ftco-services">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Services</h1>
              <h2>We want you to express yourself</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-002-recommended" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Refund Policy</h3>
                  <p>
                  No stress, Lifetime, 100% refund. As long as item is unused.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-001-box" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Premium Packaging</h3>
                  <p>
                  All out items are packed with bubbles and special protective materials to ensure no damage is done
during transit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-4">
                  <span className="flaticon-003-medal" />
                </div>
                <div className="media-body">
                  <h3 className="heading">Superior Quality</h3>
                  <p>
                  We deal only in high quality products that meets and/or exceeds global standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
