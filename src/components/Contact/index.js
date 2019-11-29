import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import ContactHeader from "./Contact";
import Bio from "./Bio";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Script />
        <Navheader />
        <ContactHeader />
        <Bio />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Contact;
