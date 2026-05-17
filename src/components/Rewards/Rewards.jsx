import "./Rewards.css";
import reward_images from "../../assets/bg4.png";

function Rewards() {
  return (
    <div className="container-fluid rewards-section text-white">
      <div className="row align-items-end align-items-xl-center">
        <div className="col-md-6 ms-auto">
          <div className="rewards-content">
            <div>
              <p className="reward-subtitle d-none d-md-block">
                Get $15 for each stamp and save up to $135!
              </p>

              <h4 className="reward-title">
                Earn and Track Rewards as You Grow
              </h4>
            </div>

            <p className="reward-description">
              Every action you take—whether it's sharing an experience,
              exploring a product, or upgrading your membership—brings you
              closer to exclusive perks.
            </p>

            <button className="reward-btn">
              <span className="reward-btn-text">
                GET REWARDS
              </span>

              <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
            </button>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex justify-content-end">
          <img
            src={reward_images}
            alt="Shrooms"
            className="img-fluid reward-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Rewards;