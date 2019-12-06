import React, { Component } from "react";
import Navheader from "../Reusables/Navheader";
import Register from "./Register";

class Reg extends Component {
  render() {
    return (
      <div>
        <Navheader />
        <Register />
      </div>
    );
  }
}

export default Reg;
