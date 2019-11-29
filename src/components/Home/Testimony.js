import React, { Component } from "react";
import { connect } from "react-redux";

class Testimony extends Component {
  render() {
    const { testimonyData } = this.props;
    return (
      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Testimony</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 ftco-animate">
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    {testimonyData.map(testimony => {
                      return (
                        <div key={testimony.id} className="item">
                          <div className="testimony-wrap py-4 pb-5">
                            <div
                              className="user-img mb-4"
                              style={{
                                backgroundImage: testimony.picture
                              }}
                            >
                              <span className="quote d-flex align-items-center justify-content-center">
                                <i className="icon-quote-left" />
                              </span>
                            </div>
                            <div className="text text-center">
                              <p className="mb-4">{testimony.status}</p>
                              <p className="name">{testimony.name}</p>
                              <span className="position">
                                {testimony.position}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

const mapStateToProps = state => {
  const { testimonyData } = state.Testimony;
  return {
    testimonyData
  };
};

export default connect(mapStateToProps)(Testimony);
