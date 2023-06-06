import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaMoneyCheckAlt, FaYoutube} from "react-icons/fa";

export default function Footer(props) {

    return (
        <>
            <div id="footerContainer">
                <div id="footerTop">
                    <div id="footerTopSplit">
                        <div className="footerColumn">
                            <span id="footerLogo">Dozitky.cz</span>
                            <span id="footerSlogan">Místo vašeho zžití</span>
                        </div>
                        <div className="footerColumn">
                            <div className="footerList">
                                <a href="/tos">Terms of Service</a>
                                <a href="/faq">Faq</a>
                                <a href="/">Soutěže</a>
                                
                            </div>
                        </div>
                        <div className="footerColumn">
                            <div className="footerList">
                                <a href="/">Kontakt</a>
                                <a href="/">Tiket</a>
                                <a href="/">Podpora</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footerBottom">
                    <a href="https://www.facebook.com/RickAstley"><FaFacebookF/></a>
                    <a href="https://twitter.com/rickastley"><FaTwitter/></a>
                    <a href="https://www.instagram.com/officialrickastley/"><FaInstagram/></a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaYoutube/></a>
                    <a href="https://www.paypal.me/jindrasuba"><FaMoneyCheckAlt/></a>
                </div>
            </div>

        </>
    );
}
