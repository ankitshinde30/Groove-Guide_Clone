import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="footer-main-content">
          
          <div className="footer-logo-wrapper">
            <a aria-label="Groove Guide Home" href="/">
              <img src={logo} alt="logo footer" className="footer-logo" />
            </a>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-column">
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">Articles</a></li>
                <li><a href="https://joincraftclub.com/events/" target="_blank" rel="noreferrer">Events</a></li>
                <li><a href="/guides-downloads">Podcast</a></li>
                <li><a href="https://linko.page/shroomgroove" target="_blank" rel="noreferrer">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-links">
                <li><a href="/">Groove Guide</a></li>
                <li><a href="https://theshroomgroove.com/" target="_blank" rel="noreferrer">Shroom Groove</a></li>
                <li><a href="https://joincraftclub.com/" target="_blank" rel="noreferrer">Craft Club</a></li>
                <li><a href="/guides-downloads">Guides & Downloads</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <ul className="footer-links">
                <li><a href="/login">Register</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/rewards">Rewards</a></li>
              </ul>
            </div>
          </div>
        </div>

        <a 
          href="https://wa.me/yournumber" 
          className="whatsapp-sticky" 
          target="_blank" 
          rel="noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

        <div className="footer-bottom mt-5">
          <p className="copyright-text">
            © Groove Guide 2026 All Rights Reserved.
          </p>
          <div className="footer-policy">
            <a href="/terms-condition">Terms Of Use</a>
            <span className="divider">|</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;