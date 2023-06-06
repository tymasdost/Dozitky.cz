import React, {useState} from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaLocationArrow,
  FaShoppingCart,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const scrollDown = (id)=> {
  if (document.getElementById(id)) document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  else window.location.href = "/";
}

export default function Header() {

  const copyToClipBoard = async copyMe => navigator.clipboard.writeText(copyMe);

  return (
    <>
      <div id="top-navbar">
        <div id="top-left">
          <div id="top-cat">
            <FaPhoneAlt id="top-icon" />
            <div id="top-text" onClick={() => copyToClipBoard('+420 696 969 696')}>+420 696 969 696</div>
          </div>
          <div id="top-cat">
            <FaMailBulk id="top-icon2" />
            <div id="top-text" onClick={() => copyToClipBoard('dozitky@dozitky.com')}>dozitky@dozitky.com</div>
          </div>
          <div id="top-cat">
            <FaLocationArrow id="top-icon" />
            <div id="top-text" onClick={() => copyToClipBoard('Zabijácká 424, Mladá Boleslav')}>Zabijácká 424, Mladá Boleslav</div>
          </div>
        </div>
      </div>
      <div id="navbar">
      <div id="nav-splitleft">
        <a href="/" id="logoLink"><img src="/logo.png" alt="dozitky.cz" id="nav-logo"></img></a>
        <div id="nav-links">
          <div className="nav-link" onClick={()=> scrollDown("sloganCenter")}>
            DOPORUČENÉ
          </div>
          <div className="nav-link" onClick={()=> scrollDown("doporucene")}>
            AKCE
          </div>
          <div className="nav-link" onClick={()=> scrollDown("akce")}>
            POPULÁRNÍ
          </div>
          <div className="nav-link" onClick={()=> scrollDown("stopScrollTeam")}>
            NÁŠ TÝM
          </div>
        </div>
        </div>
        <div id="nav-split">
          <div id="nav-socs">
            <a href="https://www.instagram.com/officialrickastley/"><FaInstagram className="nav-icon"/></a>
            <a href="https://twitter.com/rickastley"><FaTwitter className="nav-icon" /></a>
            <a href="https://www.facebook.com/RickAstley"><FaFacebookF className="nav-icon" /></a>
          </div>
        </div>
      </div>
    </>
  );
}
