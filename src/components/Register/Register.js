import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerCustomer, getFormData, checkPassword } from "../Redux/Actions"

class Register extends Component {
  render() {
    const { firstName, email, password, repeatPassword } = this.props;
    return (
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
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
                    <Link to="/" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw" /> Register with Google
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-facebook btn-user btn-block"
                    >
                      <i className="fab fa-facebook-f fa-fw" /> Register with
                      Facebook
                    </Link>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link className="small" to="/forgotpassword">
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link className="small" to="/login">
                      Already have an account? Login!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstName, email, password, repeatPassword } = state.Form;
  return {
    firstName,
    email,
    password,
    repeatPassword
  }
}

export default connect(mapStateToProps, { registerCustomer, getFormData })(Register);
