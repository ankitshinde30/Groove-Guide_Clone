import "./Stories.css";

import left from "../../assets/bg6.png";

function Stories() {
  return (
    <div className="stories-container d-flex justify-content-between align-items-center gap-4 px-4">

      <div className="stories-content">
        <h2>Inspire the Community with Your Story</h2>

        <p>
          Your journey matters. Share how mushrooms and wellness products have transformed your life, and inspire others to explore their own path. Earn rewards for contributing to our shared journey.
        </p>

        <button className="stories-btn">
          <span className="stories-btn-text">
            SHARE YOUR WELLNESS JOURNEY
          </span>

          <i className="bi bi-arrow-up-right-circle-fill"></i>
        </button>
      </div>

    </div>
  );
}

export default Stories;