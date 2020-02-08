import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getallProducts} from '../Redux/Actions'

class ShopWorld extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      page: 1,
      limit : 20,
      active:""
    };
  }
  componentWillMount() {
    const {page, limit} = this.state
    this.props.getallProducts(page, limit);
  }  
  renderBullet(){
    const {page, limit} = this.state
    let numberOfBullet = (Math.floor(this.props.productCount/20)) + (this.props.productCount%20 > 0?1:0)
    let items = [];
    for(let i= 0; i < numberOfBullet; i++){
      if (i == 0){
        items.push( <li key={i} onClick={() =>{this.props.getallProducts(i+1, limit); this.setState({page:i+1})}} className={this.state.active}><span>{i+1}</span></li>)
      }
      else{
        items.push( <li key={i} onClick={() =>{this.props.getallProducts(i+1, limit);this.setState({page:i+1})}} className={this.state.active}><span>{i+1}</span></li>)
      }
    }
  
return items;
  }

  handlePrevios(){
    const {page, limit} = this.state
    if (page == 1){
      
      this.props.getallProducts(page, limit);
    }
    else{
      this.setState({page: page- 1})
      this.props.getallProducts(page - 1, limit);
    }
  }
  handleNext(){
    const {page, limit} = this.state
    this.setState({page: page + 1})
    this.props.getallProducts(page + 1, limit);
  }
 
  render() {
    const { products } = this.props;
    
    console.log(products)
    return (
      <section className="ftco-section bg-light">
        <div className="container-fluid">
          <div className="row">
            {products.length > 0
              ? products.map(product => {
                  return (
                    <div
                      key={product.ProductId}
                      className="col-sm col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated"
                    >
                      <div className="product">
                        <Link
                          to={`/productsingle/${product.ProductId}`}
                          className="img-prod"
                        >
                          <img
                            className="img-fluid"
                            src={product.Image}
                            alt="Colorlib Template"
                          />
                          {product.Status !== "" ? (
                            <span className="status">{product.Status}</span>
                          ) : (
                            ""
                          )}
                        </Link>
                        <div className="text py-3 px-3">
                          <h3>
                            <Link to={`/productsingle/${product.ProductId}`}>
                              {product.Name}
                            </Link>
                          </h3>
                          <div className="d-flex">
                            <div className="pricing">
                              <p className="price">
                                <span className="mr-2 price-dc">
                                  {product.DiscountedPrice > 0 ?product.DiscountedPrice:null}
                                </span>
                                <span className="price-sale">
                                  {product.Price}
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
                    <Link onClick={() => this.handlePrevios()}>&lt;</Link>
                  </li>
                  {
                    this.renderBullet()
                  }
                  
                  
                  <li>
                    <Link onClick={() => this.handleNext()}>&gt;</Link>
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
  const { products, productCount} = state.Shop;
  return {
    products,
    productCount
  };
};

export default connect(mapStateToProps, {getallProducts})(ShopWorld);
