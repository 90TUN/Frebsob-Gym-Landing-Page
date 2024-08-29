import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Join from "./Join";
import TermContent from "./contents/termContent";

function Terms() {
  return (
    <div>
      <Navbar />
      <div className="page-section">
        <div className="page-text">
          <h1>
            Terms{" "}
            <span>
              <br />
            </span>{" "}
            Of Services
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
      <TermContent />
      <Join />
      <Footer />
    </div>
  );
}

export default Terms;
