import React, { Component } from "react";
import Navheader from "../Reusables/Navheader";
import LoginForm from "./LoginForm";

class Log extends Component {
  render() {
    return (
      <div>
        <Navheader />
        <LoginForm />
      </div>
    );
  }
}

export default Log;
