import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
// import Login from "./Login";
import LoginForm from "./LoginForm";

class Log extends Component {
  render() {
    return (
      <div>
        <Script />
        <Navheader />
        {/* <Login /> */}
        <LoginForm />
      </div>
    );
  }
}

export default Log;
