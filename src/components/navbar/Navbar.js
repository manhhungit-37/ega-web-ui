import React from 'react'
import { Link } from 'react-router-dom';
import navBar from 'assets/images/nav-button.svg';

//images
import logo from "assets/images/logo.svg";
import cart from "assets/images/cart.svg";

function Navbar() {
  return (
    <div className="nav-bar margin-7">
      <Link to="/" className="logo">
        <img src={logo} alt="logo"></img>
      </Link>
      <ul className="nav">
        <li>
          <Link to="/home">Trang Chủ</Link>
        </li>
        <li>
          <Link to="/collection">Tote Collection</Link>
        </li>
        <li>
          <Link to="/about">Về chúng tôi</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
        <li className="nav-button">
          <Link to="/">
            <img src={navBar} />
          </Link>
        </li>
      </ul>
      <div className="menu-mobile">
        <ul>
          <li>
            <Link to="/home">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/collection">Tote Collection</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
          <li>
            <Link to="/contact">Liên hệ</Link>
          </li>
        </ul>
      </div>
      <div className="cart">
          <img src={cart} alt="cart"></img>
          <div className="num-items">2</div>
        </div>
    </div>
  )
}

export default Navbar
