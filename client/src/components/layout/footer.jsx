import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row g-4 pb-4">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <h3 className="fw-bold mb-3">GroceryMart</h3>

            <p className="text-secondary">
              Fresh groceries and everyday essentials delivered
              right to your doorstep. Shop fresh, shop easy.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2 mt-4">
              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-circle"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/products"
                  className="text-secondary text-decoration-none"
                >
                  Products
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/categories"
                  className="text-secondary text-decoration-none"
                >
                  Categories
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/about"
                  className="text-secondary text-decoration-none"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-secondary text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Customer Service</h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  My Account
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Order Tracking
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Shipping & Delivery
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-lg-4">
            <h6 className="fw-bold mb-3">Contact Us</h6>

            <div className="d-flex mb-3">
              <i className="bi bi-geo-alt-fill me-3"></i>
              <span className="text-secondary">
                123 Main Street, Chattogram, Bangladesh
              </span>
            </div>

            <div className="d-flex mb-3">
              <i className="bi bi-telephone-fill me-3"></i>

              <a
                href="tel:+8801700000000"
                className="text-secondary text-decoration-none"
              >
                +880 1700-000000
              </a>
            </div>

            <div className="d-flex">
              <i className="bi bi-envelope-fill me-3"></i>

              <a
                href="mailto:support@grocerymart.com"
                className="text-secondary text-decoration-none"
              >
                support@grocerymart.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-top border-secondary py-3">
          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">
              <p className="text-secondary mb-0 small">
                © {new Date().getFullYear()} GroceryMart.
                All rights reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <a
                href="#"
                className="text-secondary text-decoration-none small me-3"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-secondary text-decoration-none small"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;