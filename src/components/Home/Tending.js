import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Tending extends Component {
  render() {
    const { shopData } = this.props;
    return (
      <section className="ftco-section ftco-product">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Trending</h1>
              <h2 className="mb-4">Trending</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="product-slider owl-carousel ftco-animate">
                {shopData.length > 0
                  ? shopData.map(shop => {
                      return (
                        <div key={shop.id} className="item">
                          <div className="product">
                            <Link
                              to={`/productsingle/${shop.id}`}
                              className="img-prod"
                            >
                              <img
                                className="img-fluid"
                                src={shop.picture}
                                alt="Colorlib Template"
                              />
                              {shop.status !== "" ? (
                                <span className="status">{shop.status}</span>
                              ) : (
                                ""
                              )}
                            </Link>
                            <div className="text pt-3 px-3">
                              <h3>
                                <Link to={`/productsingle/${shop.id}`}>
                                  {shop.title}
                                </Link>
                              </h3>
                              <div className="d-flex">
                                <div className="pricing">
                                  <p className="price">
                                    <span className="mr-2 price-dc">
                                      {shop.discountPrice}
                                    </span>
                                    <span className="price-sale">
                                      {shop.realPrice}
                                    </span>
                                  </p>
                                </div>
                                <div className="rating">
                                  <p className="text-right">
                                    <span className="ion-ios-star-outline" />
                                    <span className="ion-ios-star-outline" />
                                    <span className="ion-ios-star-outline" />
                                    <span className="ion-ios-star-outline" />
                                    <span className="ion-ios-star-outline" />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { shopData } = state.Shop;
  return {
    shopData
  };
};

export default connect(mapStateToProps)(Tending);
