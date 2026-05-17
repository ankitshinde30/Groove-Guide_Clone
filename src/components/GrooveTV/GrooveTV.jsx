import "./GrooveTV.css";
import tv_logo from "../../assets/guide-tv-logo.png"

function GrooveTV() {
  return (
    <>
      <div className="groove-tv-container d-flex justify-content-between align-items-center gap-4 px-4">
        <div className="groove-tv-content">
            <h2>Groove Guide TV</h2>
            <p className="xl">Watch. Learn. Experience.</p>
            <p>Your hub for live wellness conversations, expert insights, and guided experiences. Watch live sessions, explore series, and access downloadable guides connected to what you learn.</p>
            <div className="tv-buttons">
                <button className="tv-button d-flex align-items-center gap-2 ">
          WATCH GROOVE GUIDE TV
          <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
        </button>

        <button className="tv-button d-flex align-items-center gap-2 ">
          BROWSE GUIDES & DOWNLOADS
          <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
        </button>
            </div>
        </div>
        <div className="tv-logo"><img src={tv_logo} alt="" /> </div>
      </div>
    </>
  );
}

export default GrooveTV;
