import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex" id="headerElement" style={{
      textAlign: "center"
    }}>
      <Link href={"/"} className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{ width: "1rem", marginRight: "0.3rem" }}
          icon={faBagShopping}
        />
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          AWU
        </span>
        <p
          style={{
            letterSpacing: "0.5px",
          }}
        >
          Shopping
        </p>
      </Link>
      <div className="links">

        
        <Link
          className="cart"
          style={{
            position: "relative",
          }}
          href="/cart"
        >
          <FontAwesomeIcon
          className="fa-solid fa-cart-shopping"
          style={{ width: "0.8rem", marginRight: "0.3rem" }}
          icon={faCartShopping}
        />
          Cart
          <span className="products-number">2</span>
        </Link>



        <Link className="sign-in" href="./signin">
          <FontAwesomeIcon
          className="fa-solid fa-right-to-bracket"
          style={{ width: "0.8rem", marginRight: "0.3rem" }}
          icon={faRightToBracket}
        />
          Sign in
        </Link>




        <Link className="register" href="./register">
          <FontAwesomeIcon
          className="fa-solid fa-user-plus"
          style={{ width: "0.8rem", marginRight: "0.3rem" }}
          icon={faUserPlus}
        />
          Register
        </Link>



        
      </div>
    </header>
  );
}
