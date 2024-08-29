import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Join from "./Join";
import PolicyContent from "./contents/policyContent";

function Policy() {
  return (
    <div>
      <Navbar />
      <div className="page-section">
        <div className="page-text">
          <h1>
            Privacy{" "}
            <span>
              <br />
            </span>{" "}
            Policy
          </h1>
        </div>
        <div className="page-img">
          <img
            className="img-fluid"
            src={`${process.env.PUBLIC_URL}/images/page-img.png`}
            alt=""
          />
        </div>
      </div>
      <PolicyContent />
      <Join />
      <Footer />
    </div>
  );
}

export default Policy;
