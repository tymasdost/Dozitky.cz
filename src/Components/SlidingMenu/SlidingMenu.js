import React, { useState, useEffect } from "react";
import "./SlidingMenu.css";
import { GiPoisonBottle, GiBackPain, GiHandcuffs, GiTank, GiElephant, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { SiFastapi } from "react-icons/si";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaWheelchair, FaGamepad } from "react-icons/fa";
let block = false;
let catWidth = 10000;
let contwidth = 10000;


export default function SlidingMenu() {
  const [slideval, setval] = useState(0);
  useEffect(() => {
    contwidth = document.getElementById("container").clientWidth
    catWidth = contwidth / 10;

  }, [])
  window.onresize = () => {
    contwidth = document.getElementById("container").clientWidth
    catWidth = contwidth / 10;

    document.getElementById("container").style.transform = `translateX(${slideval}px)`;
  };

  const slide = (val) => {
    if (block) return;
    block = true;
    document.getElementById("container").style.transform = `translateX(${slideval + val}px)`;
    setval(slideval + val);
    setTimeout(() => {
      block = false;
    }, 200);
  };


  return (
    <>
      <div id="slider-view">
        {(slideval <= 0 ? <div id="slide-button" onClick={() => slide(catWidth * 2)}><FaArrowAltCircleLeft /></div> : null)}
        <div id="container">
          <a href="/kategorie?chemicka">
            <div className="sliding-cat">
              <GiPoisonBottle />
              <span className="slide-tag">Chemická</span>
            </div>
          </a>
          <a href="/kategorie?nahla">
            <div className="sliding-cat">
              <SiFastapi />
              <span className="slide-tag">Náhlá</span>
            </div>
          </a>
          <a href="/kategorie?adrenalinova">
            <div className="sliding-cat">
              <BsHeartPulseFill />
              <span className="slide-tag">Adrenalinová</span>
            </div>
          </a>
          <a href="/kategorie?valecna">
            <div className="sliding-cat">
              <GiTank />
              <span className="slide-tag">Válečná</span>
            </div>
          </a>
          <a href="/kategorie?bolestiva">
            <div className="sliding-cat">
              <GiBackPain />
              <span className="slide-tag">Bolestivá</span>
            </div>
          </a>
          <a href="/kategorie?uspokojiva">
            <div className="sliding-cat">
              <GiHandcuffs />
              <span className="slide-tag">Uspokojivá</span>
            </div>
          </a>
          <a href="/kategorie?dlouhodoba">
            <div className="sliding-cat">
              <FaWheelchair />
              <span className="slide-tag">Dlouhodobá</span>
            </div>
          </a>
          <a href="/kategorie?safari">
            <div className="sliding-cat">
              <GiElephant />
              <span className="slide-tag">Safari</span>
            </div>
          </a>
          <a href="/kategorie?minihry">
            <div className="sliding-cat">
              <FaGamepad />
              <span className="slide-tag">Mini hry</span>
            </div>
          </a>
          <a href="/kategorie?nahodna">
            <div className="sliding-cat">
              <GiPerspectiveDiceSixFacesRandom />
              <span className="slide-tag">Náhodná</span>
            </div>
          </a>
        </div>

        {(slideval > -(contwidth - window.innerWidth * 0.8) ? <div id="slide-button" className="right-button" onClick={() => slide(-catWidth * 2)}><FaArrowAltCircleRight /></div> : null)}
      </div>
    </>
  );
}
