import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div>
        <footer className="main-footer">
          <div className="main-wrapper footer-wrapper">
            <section className="contact">
              <h5 className="footer-heading">Contact us</h5>
              <address className="address-wrapper">
                <div className="addres-item">
                  Address: 500 Zelena St. Lviv, 79040
                </div>
                <div className="addres-item">
                  Email:{" "}
                  <a href="mailto:verysyk.baranyak@gmail.com">
                    verysyk.baranyak@gmail.com
                  </a>
                </div>
                <div className="addres-item">
                  Phone: <a href="tel:+38093020361">+380-930-203-61</a>
                </div>
              </address>

              <div className="social">
                <a href="https://www.facebook.com">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.google.com">
                  <i className="fa fa-google"></i>
                </a>
              </div>
            </section>

            <section className="news">
              <h5 className="footer-heading">Latest news</h5>
              <ul className="list">
                <li className="list-item">
                  <img
                    src="../img/news.jpg"
                    alt="news"
                    width="55"
                    height="40"
                  />
                  <h6>Some heading</h6>
                </li>
                <li className="list-item">
                  <img
                    src="../img/news2.jpg"
                    alt="news"
                    width="55"
                    height="40"
                  />
                  <h6>Some heading</h6>
                </li>
                <li className="list-item">
                  <img
                    src="../img/news3.jpg"
                    alt="news"
                    width="55"
                    height="40"
                  />
                  <h6>Some heading</h6>
                </li>
              </ul>
            </section>

            <div className="subscribe">
              <h5 className="footer-heading">Subscribe</h5>
              <form className="form">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Name"
                  required
                  name="name"
                />
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                />
                <button className="form-btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="copyright">
            <small>© 2018 by RAZER. All Rights Reserved</small>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
