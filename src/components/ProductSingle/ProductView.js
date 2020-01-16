import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { incrementItem, addedtocart, decreaseItem, handler} from "../Redux/Actions";


class ProductView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectValue: null,
      attribute: null
    };
  }
  componentWillReceiveProps() {

    const { moveToCart } = this.props;
    if (moveToCart) {
      this.props.history.push("/cart");
    }
  }
  handleChange(e){
    
    
    let atttributes = this.props.allAttributes.filter(p=>p.attribute_value == e.target.value)[0]
    this.setState({selectValue:e.target.value});
    this.setState({attribute:atttributes})
    

  }

  render() {
    const { product, value, addedtocart, allAttributes} = this.props;
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate">
              <Link to={product.Image} className="image-popup">
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
                      <select
                      value={this.state.selectValue} 
                      onChange={(e) => this.handleChange(e)} 
                       name="text" id="" className="form-control">
                        {allAttributes.map(attributes =>{
                          return(
                          <option key= {attributes.attribute_value_id} > {attributes.attribute_value}</option>
                          )
                        })}
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
              {/* addedtocart={() => this.props.addedtocart(oneProduct)} */}

              <p onClick={() => this.props.addedtocart(product, this.state.attribute)}>
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
  const { value, moveToCart, allAttributes } = state.Shop;
  return {
    value,
    moveToCart,
    allAttributes
  };
};
export default withRouter(
  connect(mapStateToProps, { incrementItem,addedtocart, decreaseItem, handler})(
    ProductView
  )
);
