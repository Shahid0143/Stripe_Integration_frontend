
import React from "react";
import "../components/Navbar.css";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.length;

  return (
    <>
      <nav className="nav-box">
        <ul>
          <strong>
            <Link to="/">
              <li>Home</li>
            </Link>
          </strong>
          <strong>
            <li>
              <Link to="/cart">
                <PiShoppingCartSimpleFill style={{ color: "white" }} />
              </Link>
            </li>
            <div className="count-no">{cartCount}</div>
          </strong>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
