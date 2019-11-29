import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ShopWorld extends Component {
  render() {
    const { shopData } = this.props;
    return (
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {shopData.length > 0
              ? shopData.map(data => {
                  return (
                    <div
                      key={data.id}
                      className="col-sm col-md-6 col-lg-3 ftco-animate"
                    >
                      <div className="product">
                        <Link
                          to={`/productsingle/${data.id}`}
                          className="img-prod"
                        >
                          <img
                            className="img-fluid"
                            src={data.picture}
                            alt="Colorlib Template"
                          />
                          {data.status !== "" ? (
                            <span className="status">{data.status}</span>
                          ) : (
                            ""
                          )}
                        </Link>
                        <div className="text py-3 px-3">
                          <h3>
                            <Link to={`/productsingle/${data.id}`}>
                              {data.title}
                            </Link>
                          </h3>
                          <div className="d-flex">
                            <div className="pricing">
                              <p className="price">
                                <span className="mr-2 price-dc">
                                  {data.discountPrice}
                                </span>
                                <span className="price-sale">
                                  {data.realPrice}
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
                          <hr />
                          <p className="bottom-area d-flex">
                            <Link to="#" className="add-to-cart">
                              <span>
                                Add to cart <i className="ion-ios-add ml-1" />
                              </span>
                            </Link>
                            <Link to="#" className="ml-auto">
                              <span>
                                <i className="ion-ios-heart-empty" />
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link to="#">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">&gt;</Link>
                  </li>
                </ul>
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

export default connect(mapStateToProps)(ShopWorld);
