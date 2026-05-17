import "./Navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <>
      <div className="top-strip text-center">
        ✨Earn $15 When You Invite a Friend <i className="bi bi-dash"></i> Share the Groove <i className="bi bi-arrow-right"></i>
      </div>

      <nav className="navbar navbar-expand-lg bg-white fixed-top-nav">
        <div className="container-fluid">
          <div className="logo">
            <img src={logo} alt="Groove Guide Logo" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="ms-auto d-flex align-items-center menu gap-4 mobile-menu-styling">
              <a href="/">Guide TV</a>
              <a href="/">Guides & Downloads</a>
              <a href="/">Blog</a>
              <button className="button login d-flex align-items-center gap-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="event-strip">
        <div className="container-fluid d-flex flex-wrap align-items-center justify-content-flex-start gap-3">
          <span>
            Join Live - May 2026 Craft Box | STEADY STRENGTH | 9th April 2026 |
            7.30 pm EST
          </span>
          <button className="button2">
            Watch Lives <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;