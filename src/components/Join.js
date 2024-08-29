import React from "react";

function Join() {
  return (
    <section className="position-relative bg-light overflow-hidden join">
      <div
        className="container text-center py-5"
        style={{ marginBottom: "50vh" }}
      >
        <h2 className="font-weight-bold">
          Join Thousands of Satisfied <br /> Gym Users.
        </h2>
        <p className="mb-4">
          Download the App Now and Start Your Fitness Journey.
        </p>

        <div className="d-flex justify-content-center">
          <div className="download" style={{ paddingBottom: "40px" }}>
            <a className="navbar-brand" href="#">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/google-play.png`}
                alt="Google Play"
              />
            </a>
            <a className="navbar-brand" href="#">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/app-store.png`}
                alt="App Store"
              />
            </a>
          </div>
        </div>

        <div className="position-absolute w-100" style={{ bottom: 0, left: 0 }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/base-img2.png`}
            alt="App Screenshots"
            className="w-100 img-fluid"
            style={{ maxHeight: "50vh" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Join;
