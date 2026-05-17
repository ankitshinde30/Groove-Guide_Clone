import "./Feedback.css";

import left from "../../assets/bg6.png";
import right from "../../assets/bg5.png";

function Feedback() {
  return (
    <>
      <div className="feedback-container d-flex justify-content-between align-items-center gap-4 px-4">
        <div className="left-side image">
          {" "}
          <img src={left} alt="" />
        </div>
        <div className="feedback-content">
          <h2>Your Feedback Fuels the Community</h2>
          <p >
            Tell us about your experience with the products you’ve tried. Your
            insights help others make better choices—and you’ll earn rewards for
            every shared experience.
          </p>
          <button className="reward-btn">
            <span className="reward-btn-text">Share Your Product Experience</span>

            <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
          </button>
        </div>
        <div className="right-side image">
          {" "}
          <img src={right} alt="" />
        </div>
      </div>
    </>
  );
}
export default Feedback;
