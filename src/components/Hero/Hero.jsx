import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import logo1 from "../../assets/logo2.png";
import logo2 from "../../assets/Shroom_Groove.png";
import logo3 from "../../assets/Groove_Grill.svg";
import logo4 from "../../assets/newPhoto.png";
import logo5 from "../../assets/Craft_club.svg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container d-flex justify-content-between align-items-center gap-4 px-4">
        <div className="left-side-img d-flex flex-column gap-3">
          <div className="image-grid row g-3 align-items-center left-image-grid">
            <div className="image-column col-6 d-flex flex-column gap-3">
              <img src={img1} alt="img1" className="small-img img-fluid" />
              <img src={img2} alt="img2" className="medium-img img-fluid" />
            </div>

            <div className="image-column col-6 d-flex flex-column gap-3">
              <img src={img3} alt="img3" className="small-img img-fluid" />
              <img src={img4} alt="img4" className="large-img img-fluid" />
              <img src={img5} alt="img5" className="medium-img img-fluid" />
            </div>
          </div>
        </div>

        <div className="hero-content d-flex flex-column justify-content-center align-items-center text-center gap-4">
          <h1>
            Your Gateway to <br />
            Wellness and Discovery.
          </h1>

          <h5>
            Explore personalized resources, exclusive rewards,
            and a thriving community—all in one place.
          </h5>

          <button className="hero-button d-flex align-items-center gap-2 ">
            GET STARTED
            <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
          </button>
        </div>

        <div className="right-side-img d-flex flex-column gap-3">
          <div className="image-grid row g-3 align-items-center right-image-grid">
            <div className="image-column col-6 d-flex flex-column gap-3">
              <img src={img6} alt="img6" className="medium-img img-fluid" />
              <img src={img7} alt="img7" className="large-img img-fluid" />
              <img src={img8} alt="img8" className="large-img img-fluid" />
            </div>

            <div className="image-column col-6 d-flex flex-column gap-3">
              <img src={img9} alt="img9" className="small-img img-fluid" />
              <img src={img10} alt="img10" className="medium-img img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-brands d-flex justify-content-between align-items-center gap-4 px-4">
        <div className="brand-tag">
          <h3>Explore our extensive ecosystem of brands.</h3>
        </div>

        <div className="brand-logos">
          <img src={logo1} alt="" className="b-logo" />
          <img src={logo2} alt="" className="b-logo" />
          <img src={logo3} alt="" className="b-logo" />
          <img src={logo4} alt="" className="b-logo" />
          <img src={logo5} alt="" className="b-logo" />
        </div>
      </div>
    </>
  );
}

export default Hero;