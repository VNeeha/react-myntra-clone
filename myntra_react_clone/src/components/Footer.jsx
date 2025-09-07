
const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      <div className="container py-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-6 col-md-4">
            <h5 className="fw-bold mb-3">ONLINE SHOPPING</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Men</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Women</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Kids</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Home & Living</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Beauty</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Gift Card</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Myntra Insider</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-4">
            <h5 className="fw-bold mb-3">CUSTOMER POLICIES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-dark">FAQ</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Terms of Use</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Shipping</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Returns</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">KEEP IN TOUCH</h5>
            <p className="text-muted small">Follow us on social media for latest trends and offers.</p>
          </div>
        </div>

        <hr />

        <div className="text-center text-muted small mt-3">
          © 2023 www.myntra.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
