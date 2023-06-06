import React, { useState, useEffect } from "react";
import "./Hero.css";
export default function SlidingMenu() {
  const scrollDown = (id)=> {
    if (document.getElementById(id)) document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    else window.location.href = "/";
  }
  return (
    <>
        <div id="hero-wrapper">
            <div id="text-container">
                <div id="hero-heading">
                    Dožitky, které stojí za to sdílet!
                </div>
                <div id="hero-smalltext">
                  Věříme, že dožitky jsou to nejcennější, co si můžete v životě přivlastnit.
                </div>
                <div id="hero-button" onClick={()=> scrollDown("doporucene")}>
                    Zažít dožitek!
                </div>
            </div>  
        </div>
    </>
  );
}
