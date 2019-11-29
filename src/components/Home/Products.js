import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    const { shopData } = this.props;
    const chosenProducts = [];
    for (let i = 0; i < 4; i++) {
      chosenProducts.push(
        <div
          key={shopData[i].id}
          className="col-sm col-md-6 col-lg ftco-animate"
        >
          <div className="product">
            <Link to={`/productsingle/${shopData[i].id}`} className="img-prod">
              <img
                className="img-fluid"
                src={shopData[i].picture}
                alt="Colorlib Template"
              />
            </Link>
            <div className="text py-3 px-3">
              <h3>
                <Link to={`/productsingle/${shopData[i].id}`}>
                  {shopData[i].title}
                </Link>
              </h3>
              <div className="d-flex">
                <div className="pricing">
                  <p className="price">
                    <span>{shopData[i].realPrice}</span>
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
    }
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big">Products</h1>
              <h2 className="mb-4">Our Products</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">{shopData.length > 0 ? chosenProducts : ""}</div>
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

export default connect(mapStateToProps)(Products);
