import React, { Component } from "react";
import Script from "../Script/Script";
import Navheader from "../Reusables/Navheader";
import BlogHeader from "./Blog";
import Highlight from "./Highlight";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";

class Blog extends Component {
  render() {
    return (
      <div>
        <Navheader />
        <Script />
        <BlogHeader />
        <Highlight />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Blog;
