import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginCustomer, getFormData } from "../Redux/Actions";

class LoginForm extends Component {
  render() {
    const { loginPassword, loginEmail } = this.props;
    return (
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
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
                        {/* <Link
                          to="/"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-facebook btn-user btn-block"
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </Link> */}
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to="/forgotpassword">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/register">
                          Create an Account!
                        </Link>
                      </div>
                    </div>
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

const mapStateToProps = state => {
  const { loginPassword, loginEmail } = state.Form;
  return {
    loginPassword,
    loginEmail
  };
};

export default connect(mapStateToProps, { loginCustomer, getFormData })(LoginForm);
