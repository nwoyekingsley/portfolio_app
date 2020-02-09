import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { apiUrl } from './../Script/config'
import { countries } from './../countries';
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  clickedPayStack,
  clickedPayBank,
  clickedPayCheck,
  changePaymentTypes,
  loginCustomer,
  getFormData,
  registerCustomer,
  checkPassword,
  UpdateShipingInfo,
  placeOrder,
  customerAddress
} from "../Redux/Actions";

class BillingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegistration: 'none',
      showCheckout: 'none',
      showLogin: '',
      countries: countries,
      States: [],
      Cities: [],
      CountryID: '',
      StateID: '',
      CityID: '',
      subTotal: 0,
      total: 0,
      shippingCost:0,
      isOpen: false,
      hideModal: true,
      shippingId:null,
      loginUser : null,
      loggedIn: false
    };
  }

  placeOrder = () => {
    let cart_id = JSON.parse(localStorage.getItem('cartId'))
    
    if (this.state.loginUser == null){
      Swal.fire({
        title: "Warning",
        text: "Loggin or register to proceed",
        icon: "warning",
        showCancelButton: false,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "COUTINUE",
        cancelButtonText: " "
      }).then(result => {
       
      });
    }else{
      if (this.state.shippingId !=null){
        this.props.placeOrder(cart_id,this.state.shippingId, this.state.loginUser )
      }
      else{
        Swal.fire({
          title: "Warning",
          text: "You have to select a shipping method",
          icon: "warning",
          showCancelButton: false,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "COUTINUE",
          cancelButtonText: " "
        }).then(result => {
         
        });
      }
    }
    
  };

  componentDidMount(){
    let loginUserString = localStorage.getItem('loginAbuchiUser')
    console.log(loginUserString)
    if (loginUserString != "null" && loginUserString != null){
      let loginUser = JSON.parse(loginUserString)
      
      let expiresIn = new Date(loginUser.expires_in)
      let currentDate = new Date()
      console.log(expiresIn, currentDate)
      if (expiresIn >= currentDate){
        this.setState({loggedIn: true})
        this.setState({loginUser:loginUser})
      }
      else{
        localStorage.setItem('loginAbuchiUser', null)
        this.handleSwitchLogingRegister('Login')
      }
    }

  }
 

  chooseShippingMethod(event){
    let newSubtotal = this.props.shippingInfo.filter(p=>p.ShippingId == event.target.value)[0].ShippingCost
    this.setState({shippingCost:newSubtotal})
    console.log(newSubtotal)
    this.props.UpdateShipingInfo(event.target.value)
    this.setState({shippingId:event.target.value})
  }

  handleSwitchLogingRegister(value) {
  
    if (value == 'login') {
      this.setState({ showRegistration: 'none' });
      this.setState({ showLogin: 'block' })
      this.setState({showCheckout: 'none'})
      
    }
    else if (value == 'register'){
      this.setState({ showLogin: 'none' });
      this.setState({ showRegistration: 'block' })
      this.setState({showCheckout: 'none'})
    }else{
      this.setState({ showLogin: 'none' });
      this.setState({ showRegistration: 'none' })
      this.setState({ showCheckout: 'block' })
    }
  }
  handleCountryChange(event) {
    event.preventDefault();
    event.persist()
    const { value } = event.target;
    axios
      .get(apiUrl +
        "utility/state/" + value
      )
      .then(res => {
        this.setState({
          States: res.data,
          CountryID: value

        });
        this.props.getFormData({ props: event.target.name, value: event.target.value })
        this.renderStatesDropdownItems()
      })
      .catch(error => {

        console.log(error, "i am the error 1");
      });


  }

  // componentWillReceiveProps(nextProps){
  //   console.log({nextProps})
  //   if(nextProps.loggedIn){
     
  //     this.handleSwitchLogingRegister('checkout')
  //   }
  // }

  //handleCountryChange
  handleStateChange(event) {
    event.preventDefault();
    event.persist()
    const { value } = event.target;
    axios
      .get(apiUrl +
        "utility/city/" + value
      )
      .then(res => {
        this.setState({
          Cities: res.data,
          StateID: value
        });
        this.props.getFormData({ props: event.target.name, value: event.target.value })
        this.renderCitiesDropdownItems()
      })
      .catch(error => {

      });

  }


  static getDerivedStateFromProps(nextProps, prevState) {
    

    if (nextProps.addedCart.length > 0) {
      let subTotal = 0.00
      for (let i = 0; i < nextProps.addedCart.length; i++) {
        subTotal += parseFloat(nextProps.addedCart[i].SubTotal);
      }
      let showLogin = prevState.showLogin,showRegistration = prevState.showRegistration, showCheckout = prevState.showCheckout

      if(prevState.loggedIn === true){
      
        
          showLogin = 'none' ;
          showRegistration ='none';
          showCheckout ='block';
       
      }
      console.log({nextProps})
      return {loggedIn:nextProps.loggedIn, subTotal: subTotal, total: subTotal + 1000 + prevState.shippingCost,showLogin :showLogin, showRegistration:showRegistration,showCheckout:showCheckout };
    }
    
    else return null;
  }


renderShiping(){
  var items = [];
  console.log(this.props.shippingInfo)
  if (this.props.shippingInfo != undefined){
    for (let i = 0; i < this.props.shippingInfo.length; i++) {
      items.push(
      <div key={i} className="form-group">
          <div className="col-md-12">
            <div className="radio">
               <label><input type="radio" name="optradio" value={this.props.shippingInfo[i].ShippingId} checked={this.props.shippingInfo[i].isChecked} onChange={(event) => this.chooseShippingMethod(event)} className="mr-2"/> {this.props.shippingInfo[i].ShippingType}</label>
            </div>
          </div>
        </div>)
       
              }
              return items
  }
  
}
  //country
  renderCountriesDropdownItems() {
    var items = [];

    for (var i = 0; i < this.state.countries.length; i++) {
      var item = this.state.countries[i];

      items.push(
        <option key={item.id} className="selectoptiondropdown" value={item.id} >{item.name}</option>
      );
    }
    return items;
  }

  //states dropdown
  renderStatesDropdownItems() {

    var items = [];

    for (var i = 0; i < this.state.States.length; i++) {
      var item = this.state.States[i];

      items.push(
        <option key={item.StateID} className="selectoptiondropdown" value={item.StateID} >{item.name}</option>
      );
    }
    return items;
  }
  //cities dropdown
  renderCitiesDropdownItems() {
    var items = [];

    for (var i = 0; i < this.state.Cities.length; i++) {
      var item = this.state.Cities[i];

      items.push(
        <option key={item.CityID} className="selectoptiondropdown" value={item.cityID}>{item.name}</option>
      );
    }
    return items;
  }
  render() {
    const { loginPassword, loginEmail, paymentType, firstName, email, password, repeatPassword , mob_phone, Address_1,
       city, region, postal_code, country, shipping_region_id,address_1, address_2} = this.props;
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 ftco-animate">

              <div className="login" style={{ display: this.state.showLogin }}>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control "
                      name='loginEmail'
                      value={loginEmail}
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email Address..."
                      onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword"
                      placeholder="Password"
                      value={loginPassword}
                      name='loginPassword'
                      onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck"
                      >
                        Remember Me
                            </label>
                    </div>
                  </div>
                  <Link
                    to="/"
                    className="btn btn-primary btn-user btn-block"
                    onClick={e => {
                      e.preventDefault();
                      this.props.loginCustomer(loginEmail, loginPassword);
                    }}
                  >
                    Login
                        </Link>
                  <hr />

                </form>

                <hr />
                <div className="text-center">
                  <Link className="small" to="/forgotpassword">
                    Forgot Password?
                        </Link>
                </div>
                <div className="text-center">
                  <Link to='#' className="small" onClick={() => this.handleSwitchLogingRegister('register')} >
                    Create an Account!
                        </Link>
                </div>
              </div>
              <div className="register" style={{ display: this.state.showRegistration }}>
                <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name='firstName'
                        value={firstName}
                        id="exampleEnterYouName"
                        placeholder="Enter You Name"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        name='email'
                        value={email}
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name='Address_1'
                        value={Address_1}
                        id="exampleInputAddress"
                        aria-describedby="emailHelp"
                        placeholder="Enter Address..."
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        name='mob_phone'
                        value={mob_phone}
                        id="exampleInputAddress"
                        aria-describedby="emailHelp"
                        placeholder="Enter phonenumber"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>



                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">

                      <select name="name" className="form-control" value={this.state.CountryID} onChange={(e) => this.handleCountryChange(e)}>
                        <option key={0} className="">Select country</option>
                        {this.renderCountriesDropdownItems()}
                      </select>
                    </div>
                    <div className="col-md-6 ">

                      <select name="name" className="form-control" value={this.state.StateID} onChange={(e) => this.handleStateChange(e)}>
                        <option key={0} className="">Select state</option>
                        {this.renderStatesDropdownItems()}
                      </select>
                    </div>

                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <select
                        name="city"
                        className="form-control"
                        value={this.state.CityID}
                        onChange={(e) => { this.props.getFormData({ props: e.target.name, value: e.target.value }); this.setState({ CityID: e.target.value }) }}>
                        <option key={0} className="">Select city</option>
                        {this.renderCitiesDropdownItems()}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        id="exampleInputPassword"
                        placeholder="Password"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control"
                        name="repeatPassword"
                        value={repeatPassword}
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    disabled={checkPassword(password, repeatPassword)}
                    className="btn btn-primary btn-user btn-block"
                    onClick={e => {
                      e.preventDefault();
                      this.props.registerCustomer(firstName, email, password);
                    }}
                  >
                    Register Account
                    </button>
                  <hr />

                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="/forgotpassword">
                    Forgot Password?
                    </Link>
                </div >
                <div className="text-center">
                  <Link className="small" onClick={() => this.handleSwitchLogingRegister('login')}>
                    Already have an account? Login!
                    </Link>
                </div>
              </div>

              {/* END */}
              <div style ={{display: this.state.showCheckout}}>
              
              <form className="user">
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name='address_1'
                        value={address_1}
                        id="exampleEnterYouName"
                        placeholder="Enter You Address"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name='address_2'
                        value={address_2}
                        id="exampleEnterYouName"
                        placeholder="Another Address..."
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                   
                  </div>
                   <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                      <select name="name" className="form-control" value={this.state.CountryID} onChange={(e) => this.handleCountryChange(e)}>
                        <option key={0}className="">Select country</option>
                        {this.renderCountriesDropdownItems()}
                      </select>
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                      <select name="name" className="form-control" value={this.state.StateID} onChange={(e) => this.handleStateChange(e)}>
                    <option key={0} className="">Select state</option>
                    {this.renderStatesDropdownItems()}
                  </select>
                    </div>
                   
                    </div>
                   
                  <div className="form-group row">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name="region"
                        value={region}
                        id="exampleInputPassword"
                        placeholder="Region"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="postal_code"
                        value={postal_code}
                        id="exampleRepeatPassword"
                        placeholder="Postal Code"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control"
                        name="shipping_region_id"
                        value={shipping_region_id}
                        placeholder="Shipping region id"
                        onChange={(e) => this.props.getFormData({ props: e.target.name, value: e.target.value })}
                      />
                    </div>
                  </div>
                  <button
                    disabled={checkPassword(password, repeatPassword)}
                    className="btn btn-primary btn-user btn-block"
                    onClick={e => {
                      e.preventDefault();
                      this.props.customerAddress(address_1, address_2, this.state.StateID, region, postal_code, this.state.CountryID, shipping_region_id,this.state.loginUser );
                    }}
                  >
                   Save Address
                    </button>
                  <hr />

                </form>
                <hr />
              <div className="row mt-5 pt-3 d-flex" >
                <div className="col-md-6 d-flex">
                  <div className="cart-detail cart-total bg-light p-3 p-md-4">
                  <h3 className="billing-heading mb-4">Shipping Method</h3>
                  {
                        this.renderShiping()
                      }
                    <h3 className="billing-heading mb-4">Cart Total</h3>
                    <p className="d-flex">
                      <span>Subtotal</span>
                      <span>&#8358; {this.state.subTotal}</span>
                    </p>
                    <p className="d-flex">
                      <span>Service charge</span>
                      <span>&#8358; 1000.00</span>
                    </p>

                    <hr />
                    <p className="d-flex total-price">
                      <span>Total</span>
                      <span>&#8358; {this.state.total}</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cart-detail bg-light p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Advisory</h3>
                   

                    <p> To enable us identify your order, put your <b> "Order reference code"</b> into the <b>"Remarks, Reference or Purpose"</b> tab provided by your bank</p>
                    {/* <div className="form-group">
                      <div className="col-md-12">
                        <div className="">
                          <label>
                            {/* <input
                              type="text"
                              name="optradio"
                              className="mr-2"
                              onClick={() =>
                                this.props.changePaymentTypes("clickedPayBank")
                              }
                            />{" "} */}
                            {/* Payment Advisory:
Kindly make payment into your preferred bank account number below.
                          </label>
                        </div>
                      </div>
                    </div> */}
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="">
                          <label style={{ fontWeight: 'bold' }}>
                            {/* <input
                              type="text"
                              name="optradio"
                              className="mr-2"
                              onClick={() =>
                                this.props.changePaymentTypes("clickedPayCheck")
                              }
                            />{" "} */}
                            Ecobank
Abuchi Orji
3273069643
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="">
                          <label style={{ fontWeight: 'bold' }}>
                            {" "}
                            GTBank
 Abuchi Orji
 0041861401
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="checkbox">
                          <label>
                            <p
                              type="checkbox"
                              defaultValue
                              className=""
                              style={{ color: 'red', fontWeight: 'bold' }}>

                              To enable us identify your order, kindly put your "Order reference code" generated when you click the "place order" button into the "Remarks, Reference or Purpose" tab provided by your bank.
                            </p>

                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <Link
                       
                        onClick={() => this.placeOrder()}
                        className="btn btn-primary py-3 px-4"
                        
                      >
                        Place an order
                      </Link>
                    </p> 
                  </div>
                  {/* <Modal show={this.state.isOpen} >
                    <Modal.Header>
                      <Modal.Title>Shipping Option</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {
                        this.renderShiping()
                      }
                    
                    </Modal.Body>
                    <Modal.Footer>
                      <button onClick={() => this.hideModal()}>Cancel</button>
                      <button>Save</button>
                    </Modal.Footer>
                  </Modal> */}
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { paymentType, loggedIn, addedCart, shippingInfo  } = state.Shop;
  const { firstName, email, password, repeatPassword, loginPassword, loginEmail, mob_phone,
     address_1, city, region, postal_code, country, shipping_region_id, address_2} = state.Form;
  return {
    addedCart,
    paymentType,
    firstName,
    email,
    password,
    repeatPassword,
    loginPassword,
    loginEmail,
    mob_phone,
    shippingInfo,
    loggedIn,
    address_1, city, region, postal_code, country, shipping_region_id,
    address_2

  };
};

export default connect(mapStateToProps, {
  clickedPayStack,
  clickedPayCheck,
  clickedPayBank,
  changePaymentTypes,
  loginCustomer,
  getFormData,
  registerCustomer,
  UpdateShipingInfo,
  placeOrder,
  customerAddress
})(BillingDetails);
