import React from "react";
import Script from "../Script/Script";
import Navbar from "../Reusables/Navbar";
import Statis from "./Statis";
import Tending from "./Tending";
import Fashion from "./Fashion";
import Products from "./Products";
import HighLight from "./HighLight";
import Testimony from "./Testimony";
import Feeds from "./Feeds";
import Services from "./Services";
import Subscribe from "../Reusables/Subscribe";
import Footer from "../Reusables/Footer";

function Home() {
  return (
    <div>
      <Script />
      <Navbar />
      <Statis />
      <Tending />
      <Fashion />
      <Products />
      <HighLight />
      <Testimony />
      <Feeds />
      <Services />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
