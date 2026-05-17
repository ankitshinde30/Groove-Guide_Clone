import "./NewsLetter.css"
import message from "../../assets/email2.svg"


function Newsletter(){
    return(
        <>
        <div className="newsletter-container d-flex justify-content-between align-items-center gap-4 px-4">
        <div className="newsletter-title">
            <img src={message} alt="" />
            <h2>Stay Updated with the Latest Insights</h2>

        </div>
        <div className="newsletter-description">
            <p>Catch up on our newsletter in the Resource Center, with exclusive content and updates tailored for you.</p>
        </div>
        <div className="newsletter-btn-container">
             <button className="newsletter-button d-flex align-items-center gap-2 px-4 py-1 ">
          EXPLORE THE NEWSLETTER
          <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
        </button>
        </div>
        </div>
        </>
    )
}
export default Newsletter;