import React from "react";

function Features() {
  return (
    <div className="container-fluid features">
      <h1>Key Features of Frebson Gym App</h1>

      <div className="row align-items-center feature-row">
        <div className="col-lg-4 col-md-12 mb-4 left-col">
          <div className="card bg-dark text-light mb-3">
            <div className="card-body dark">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/access-control.png`}
                  alt=""
                />{" "}
                <p>Access Control</p>
              </h5>
              <p className="card-text">
                Gain entry to the gym effortlessly by scanning a QR code with
                the Frebson Gym App. Access is granted only if your membership
                is active, ensuring a secure environment for all members.
              </p>
            </div>
          </div>
          <div className="card bg-light text-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/membership.png`}
                  alt=""
                />{" "}
                <p>Membership Management</p>
              </h5>
              <p className="card-text">
                Stay on top of your membership details, including countdowns and
                expiration dates, right within the app. When it’s time to renew,
                the app provides a seamless and secure payment process, so you
                never miss a workout.
              </p>
            </div>
          </div>
          <div className="card bg-dark text-light">
            <div className="card-body dark">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/session.png`}
                  alt=""
                />{" "}
                <p>Session History</p>
              </h5>
              <p className="card-text">
                Keep a detailed record of your gym visits with the session
                history feature. View your progress through calendar marks,
                helping you stay motivated and track your fitness journey over
                time.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 text-center img-fluid image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/feature-img.png`}
            alt=""
          />
        </div>

        <div className="col-lg-4 col-md-12 mb-4 right-col">
          <div className="card bg-light text-dark mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/community.png`}
                  alt=""
                />{" "}
                <p>Community</p>
              </h5>
              <p className="card-text">
                Stay connected with trainers, support staff, and other gym
                members using the app’s real-time chat functionality. Whether
                you need advice or just want to chat, the Frebson Gym App keeps
                you in touch.
              </p>
            </div>
          </div>
          <div className="card bg-dark text-light mb-3">
            <div className="card-body dark">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/payment.png`}
                  alt=""
                />{" "}
                <p>Payment Processing</p>
              </h5>
              <p className="card-text">
                Make payments directly through the Frebson Gym App using
                multiple payment methods. Whether renewing your membership or
                purchasing additional services, enjoy a hassle-free and secure
                payment experience.
              </p>
            </div>
          </div>
          <div className="card bg-light text-dark">
            <div className="card-body">
              <h5 className="card-title">
                <img
                  src={`${process.env.PUBLIC_URL}/images/notification.png`}
                  alt=""
                />{" "}
                <p>Notifications</p>
              </h5>
              <p className="card-text">
                Receive important updates and reminders through in-app
                notifications and push notifications. Whether it’s a membership
                renewal reminder, a session alert, or an urgent update from the
                gym administrators, you’ll always be in the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
