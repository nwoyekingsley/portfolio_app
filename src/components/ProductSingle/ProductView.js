import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { incrementItem,  decreaseItem, handler, getProductAttributes} from "../Redux/Actions";


class ProductView extends Component {

  componentDidMount(){
    console.log(this.props.product)
    this.props.getProductAttributes(this.props.product.ProductId)
  }
  componentWillReceiveProps() {

    const { moveToCart } = this.props;
    if (moveToCart) {
      this.props.history.push("/cart");
    }
  }

  render() {
    const { product, value, addedtocart } = this.props;
  
    // let productSize = product.size.map((size, i) => {
    //   return <option key={i}>{size}</option>;
    // });
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate">
              <Link to="/Assets/images/menu-2.jpg" className="image-popup">
                <img
                  src={product.Image}
                  className="img-fluid"
                  alt="Colorlib Template"
                />
              </Link>
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate">
              <h3>{product.Name}</h3>
              <p className="price">
                <span>{product.Price}</span>
              </p>
              <p>{product.Description}</p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group d-flex">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down" />
                      </div>
                      <select name="text" id="" className="form-control">
                        {/* {productSize} */}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="input-group col-md-6 d-flex mb-3">
                  <span className="input-group-btn mr-2">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field
                      onClick={() => this.props.decreaseItem(value)}
                    >
                      <i className="ion-ios-remove" />
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    value={value}
                    onChange={e => this.props.handler(e)}
                  />
                  <span className="input-group-btn ml-2">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field
                      onClick={() => this.props.incrementItem(value)}
                    >
                      <i className="ion-ios-add" />
                    </button>
                  </span>
                </div>
              </div>
              <p onClick={addedtocart}>
                <Link to="#" className="btn btn-primary py-3 px-5">
                  Add to Cart
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
  const { value, moveToCart } = state.Shop;
  return {
    value,
    moveToCart
  };
};
export default withRouter(
  connect(mapStateToProps, { incrementItem, decreaseItem, handler, getProductAttributes })(
    ProductView
  )
);
