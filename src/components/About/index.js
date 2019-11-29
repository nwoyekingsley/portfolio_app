import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import AboutHeader from "./About";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";
import Fashion from "../Home/Fashion";
import Feeds from "../Home/Feeds";
import Services from "../Home/Services";
import Testimony from "../Home/Testimony";

class About extends Component {
  render() {
    return (
      <div>
        <Script />
        <Navheader />
        <AboutHeader />
        <Fashion />
        <Testimony />
        <Feeds />
        <Services />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default About;
