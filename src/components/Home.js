import Navbar from "./Navbar";
import Footer from "./Footer";
import Join from "./Join";
import Features from "./Features";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-text">
          <h1>Transform Your Fitness Journey with Frebson Gym App</h1>
          <p>
            Achieve your fitness goals with Frebson Gym App—personalized
            workouts, progress tracking, expert guidance. Join our community and
            start your journey to a healthier, stronger you today!
          </p>
          <div className="download">
            <a class="navbar-brand" href="#">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/google-play.png`}
                alt=""
              />
            </a>
            <a class="navbar-brand" href="#">
              <img
                className="img-fluid"
                src={`${process.env.PUBLIC_URL}/images/app-store.png`}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="hero-img">
          <img
            className="img-fluid"
            src={`${process.env.PUBLIC_URL}/images/hero-image.png`}
            alt=""
          />
        </div>
      </div>
      <Features />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
