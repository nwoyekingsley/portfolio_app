import React, { Component } from "react";
import { Link } from "react-router-dom";

class Fashion extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light" >
        <div className="container">
          <div className="row">
            <div
              className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: "url(/Assets/images/bg_2.jpeg)" }}
            >
              {/* <Link
                to="https://vimeo.com/45830194"
                className="icon popup-vimeo d-flex justify-content-center align-items-center"
              >
                <span className="icon-play" />
              </Link> */}
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
              <div className="heading-section-bold mb-5 mt-md-5">
                <div className="ml-md-0">
                  <h2 className="mb-4">
                    Goterem 
                   
                  </h2 >
                  <h1 > online </h1>
                </div>
              </div>
              <div className="pb-md-5">
                <p>
                Goterem is an online boutique store, where everyone looking to style-up will find unique accessories,
gifts and/or bliss.
                </p>
                <p>
                We have a wide range of products available to “ship immediately” as well as other items that are
“shipped from abroad”. Estimated time of arrival for “ship immediately” is 1 to 3days while “shipped
from abroad” is 15 to 25days (Excluding weekends).
                </p>
                <p>
                “Shipped from abroad” items will be shipped to the post office closest to your address while “ship
immediately” items will be shipped through post office and EMS service. Kindly contact us through our
contact info for more details (WhatsApp preferred).
                </p>
                <p>
                We ship to every city in Nigeria and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Fashion;
