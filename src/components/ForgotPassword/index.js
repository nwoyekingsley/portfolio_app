import React, { Component } from "react";
import Navheader from "../Reusables/Navheader";
import ForgotPassword from "./ForgotPassword";

class Forgot extends Component {
  render() {
    return (
      <div>
        <Navheader />
        <ForgotPassword />
      </div>
    );
  }
}

export default Forgot;
