const Footer = () => {
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-center">
            <h3>EXTRAS</h3>
            <div>Brands</div>
            <div>Gift Certificates</div>
            <div>Affiliate</div>
            <div>Specials</div>
            <div>Site Map</div>
          </div>
          <div className="footer-center">
            <h3>INFORMATION</h3>
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Contact Us</div>
            <div>Site Map</div>
          </div>
          <div className="footer-center">
            <h3>MY ACCOUNT</h3>
            <div>My Account</div>
            <div>Order History</div>
            <div>Wish List</div>
            <div>Newsletter</div>
            <div>Returns</div>
          </div>
          <div className="footer-center">
            <h3>CONTACT US</h3>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div>
              <span>
                <i className="far fa-envelope"></i>
              </span>
              company@gmail.com
            </div>
            <div>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              456-456-4512
            </div>
            <div className="payment-methods"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
