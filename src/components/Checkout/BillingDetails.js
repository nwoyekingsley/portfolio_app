import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { apiUrl } from './../Script/config'
import { countries } from './../countries';


import {
  clickedPayStack,
  clickedPayBank,
  clickedPayCheck,
  changePaymentTypes,
  loginCustomer,
  getFormData,
  registerCustomer,
  checkPassword
} from "../Redux/Actions";

class BillingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegistration: 'none',
      showLogin: '',
      countries: countries,
      States: [],
      Cities: [],
      CountryID: '',
      StateID: '',
      CityID: ''
    };
  }
  handleSwitchLogingRegister(value) {
    if (value == 'login') {
      this.setState({ showRegistration: 'none' });
      this.setState({ showLogin: 'block' })
    }
    else {
      this.setState({ showLogin: 'none' });
      this.setState({ showRegistration: 'block' })
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
        console.log(res.data)
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

        console.log(error, "i am the error 1");
      });

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
    const { loginPassword, loginEmail, paymentType, firstName, email, password, repeatPassword , mob_phone} = this.props;
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
                  <Link className="small" onClick={() => this.handleSwitchLogingRegister('Register')} >
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
                        value={email}
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
  <option key={0}className="">Select country</option>
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
                        onChange={(e) => {this.props.getFormData({ props: e.target.name, value: e.target.value });this.setState({CityID:e.target.value})} }>
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
              <div className="row mt-5 pt-3 d-flex">
                <div className="col-md-6 d-flex">
                  <div className="cart-detail cart-total bg-light p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Cart Total</h3>
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
                      <span>$3.00</span>
                    </p>
                    <hr />
                    <p className="d-flex total-price">
                      <span>Total</span>
                      <span>$17.60</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cart-detail bg-light p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Payment Method</h3>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                              onClick={() =>
                                this.props.changePaymentTypes("clickedPayBank")
                              }
                            />{" "}
                            Direct Bank Tranfer
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                              onClick={() =>
                                this.props.changePaymentTypes("clickedPayCheck")
                              }
                            />{" "}
                            Check Payment
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              className="mr-2"
                              onClick={() =>
                                this.props.changePaymentTypes("clickedPayStack")
                              }
                            />{" "}
                            PayStack
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              defaultValue
                              className="mr-2"
                            />{" "}
                            I have read and accept the terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <p>
                      <Link
                        to="#"
                        onClick={() =>
                          paymentType === "clickedPayStack"
                            ? this.props.clickedPayStack()
                            : ""
                        }
                        className="btn btn-primary py-3 px-4"
                      >
                        Place an order
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { paymentType } = state.Shop;
  const { firstName, email, password, repeatPassword, loginPassword, loginEmail, mob_phone } = state.Form;
  return {
    paymentType,
    firstName,
    email,
    password,
    repeatPassword,
    loginPassword,
    loginEmail,
    mob_phone
  };
};

export default connect(mapStateToProps, {
  clickedPayStack,
  clickedPayCheck,
  clickedPayBank,
  changePaymentTypes,
  loginCustomer,
  getFormData,
  registerCustomer
})(BillingDetails);
