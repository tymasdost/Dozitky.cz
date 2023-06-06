import React, { useState, useEffect } from "react";
import "./Faq.css";
import Header from "../Components/Header/Header.js";
import { FaStar } from "react-icons/fa";

import Footer from '../Components/Footer/Footer.js'


export default function Faq() {

    return (
        <>
            <Header />
            <div id="tosWrapper">
                <div id="tosHeader">
                    Často kladené otázky
                </div>
                <div id="faqText">
                    <div id="faqCont">
                        <div id="faqQuest">
                            -Kolik máte penisů?
                        </div>
                        <div id="faqAns">
                            Penisů máme 10.
                        </div>
                    </div>
                    <div id="faqCont">
                        <div id="faqQuest">
                            -Šlapeš zelí?
                        </div>
                        <div id="faqAns">
                            Ano to je jasná věc.
                        </div>
                    </div>
                    <div id="faqCont">
                        <div id="faqQuest">
                            -Poletíme raketou na planetu zombie?
                        </div>
                        <div id="faqAns">
                            Co proti nám bombí.
                        </div>
                    </div>
                    <div id="faqCont">
                        <div id="faqQuest">
                            -Mi máme fizi moneygun?
                        </div>
                        <div id="faqAns">
                            Tak v pohodě dobrý.
                        </div>
                    </div>
                    <div id="faqCont">
                        <div id="faqQuest">
                            -Bílá liga?
                        </div>
                        <div id="faqAns">
                            Bílá síla!!!
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}