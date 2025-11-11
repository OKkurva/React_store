import React from "react";
import "./header.css";
import cartIcon from "../../img/cartIcon.png";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <>
      <div>
        <header className="main-header">
          <div className="main-wrapper header-wrapper">
            <Link className="logo" to="/">
              <img
                src="https://www.stuff.com.tr/v1/wp-content/uploads/2016/03/Razer-2016-Yeni-Logo.png"
                width="150"
                alt="Razer logo"
              />
            </Link>

            <nav className="main-navigation">
              <Link className="nav-link" to="/">
                Razer History
              </Link>{" "}
              |{" "}
              <Link className="nav-link" to="/mouses">
                Mouses
              </Link>{" "}
              |{" "}
              <Link className="nav-link" to="/headphones">
                Headphones
              </Link>{" "}
              |{" "}
              <Link className="nav-link" to="/keyboards">
                Keayboards
              </Link>{" "}
              |{" "}
              <Link className="nav-link" to="/buy">
                Buy
              </Link>{" "}
              |{" "}
              <Link className="nav-link" to="/cart">
                <div style={{ position: "relative" }}>
                  <img
                    className="headerIcon"
                    src={cartIcon}
                    alt="cart"
                    width="50px"
                  />
                  {cart.length > 0 && <div
                    style={{
                      position: "absolute",
                      top: "-2px",
                      height: "10px",
                      left: "-2px",
                      width: "10px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    {cart.length}
                  </div>}
                </div>
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
