import React, { Component } from "react";

class Feeds extends Component {
  render() {
    return (
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: "url(/Assets/images/bg_4.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={10000}>
                        0
                      </strong>
                      <span>Happy Customers</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100}>
                        0
                      </strong>
                      <span>Branches</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={1000}>
                        0
                      </strong>
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100}>
                        0
                      </strong>
                      <span>Awards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feeds;
