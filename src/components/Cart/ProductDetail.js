import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handler } from "../Redux/Actions";

class ProductDetail extends Component {
  render() {
    const { addedCart, value } = this.props;
    return (
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addedCart.map(addedData => {
                      return (
                        <tr key={addedData.id} className="text-center">
                          <td className="product-remove">
                            <Link to="#">
                              <span className="ion-ios-close" />
                            </Link>
                          </td>
                          <td className="image-prod">
                            <div
                              className="img"
                              style={{
                                backgroundImage:
                                  "url(" + addedData.picture + ")"
                              }}
                            />
                          </td>
                          <td className="product-name">
                            <h3>{addedData.title}</h3>
                            <p>{addedData.description}</p>
                          </td>
                          <td className="price">{addedData.realPrice}</td>
                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                name="quantity"
                                className="quantity form-control input-number"
                                value={value}
                                onChange={e => this.props.handler(e)}
                              />
                            </div>
                          </td>
                          <td className="total">$coming Soon</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>$20.60</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <p className="d-flex">
                  <span>Discount</span>
                  <span>$0.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>$3.00</span>
                </p>
              </div>
              <p className="text-center">
                <Link to="/checkout" className="btn btn-primary py-3 px-4">
                  Proceed to Checkout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { addedCart, value } = state.Shop;
  return {
    addedCart,
    value
  };
};

export default connect(mapStateToProps, { handler })(ProductDetail);
