import "./MemberShip.css";


function MemberShip(){
    return(
        <>
         <div className="container-fluid membership-container d-flex justify-content-end align-items-center gap-4 px-4"  >

            <div className="membership-content">
            <i>Elevate your membership!</i>
            <h2>Enhance Your Membership</h2>
            <h5>Get $200 worth of products for $97/month, exclusive perks, cashback rewards, and more.</h5>
                <button className="membership-button d-flex align-items-center gap-2 ">
          UPGRADE MY GROOVE
          <i className="bi bi-arrow-up-right-circle-fill size-5"></i>
        </button>
            </div>

         </div>
        </>
    )
}

export default MemberShip;