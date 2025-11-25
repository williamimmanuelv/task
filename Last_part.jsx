import './Last-part.css';
import bottom_google_play from '/bottom_google_play.png';
import bottom_app_store from '/bottom_app_store.png';
// import bottom_app_store  from '/bottom_app_store.png';
function Last_part() {
  return (
    <>
      <div className="main">
        <div className="left">
          <h2>About Goolok</h2>
          <p>Goolok is your trusted partner for a simpler, safer property experience.
            We are a managed real estate brokerage that handles every step
            of your journey—from listing verified properties to providing expert legal
            and documentation services.</p>

        </div>
        <div className="right">
          <h2>Properties in Chennai</h2>
          <span>
            <a>Property in Ariyalur</a>
            <a>| Property in Chennai </a>
            <a>| Property in Coimbatore</a>
            <a>| Property in Cuddalore</a>
          </span>
        </div>
      </div>

      <div className="main">
        <div className="left">
          <h2>More from Our Network</h2>
          <span className='span-bottom'>
            <a >Economic</a>
            <a>Navbharat</a>
            <a>Gadgets</a>
          </span>
          
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={bottom_google_play} className="b_logo" alt="logo" />
          </a>
          <a href="https://vite.dev" target="_blank">
            <img src={bottom_app_store} className="b_logo" alt="logo" />
          </a>
        </div>


        </div>
        <div className="right">
          <h2>New Projects in Tamil Nadu</h2>
          <p>New Projects in Tamil Nadu1st</p>
        </div>
      </div>
      <div className='bottom-middle'>
        <a>Who we are</a>
        <a>How it's work</a>
        <a>Blogs</a>
        <a>Terms & Conditions</a>
        <a>Privacy Policy</a>
        <a>Refund Policy</a>
        <a>About us</a>
        <a>Contact us</a>
      </div>
        <p className='last-para'>Disclaimer : Goolok Realty Services Limited is only an intermediary
          offering its platform to advertise properties of Seller for a Customer/Buyer/User
          coming on its Website and is not and cannot be a party to or privy to or control
          in any manner any transactions between the Seller and the Customer/Buyer/User.
          All the offers and discounts on this Website have been extended by
          various Builder(s)/Developer(s) who have advertised their products.</p>

    </>
  )
}
export default Last_part;