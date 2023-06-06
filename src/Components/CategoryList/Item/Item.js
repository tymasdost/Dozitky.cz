import React, { useState, useEffect } from "react";
import "./Item.css";
import { FaStar } from "react-icons/fa";
export default function Item(props) {

    return (
        <>
            
            <div id="item-wrapper"> 
            <a id="item-link" href={`/polozka?${props.url}`}> 
                <div id="item-bg" style={{ backgroundImage: `url(${props.obrazek})` }}>
                <div id="itemSale">
                        {(props.sleva !== undefined ? `-${props.sleva}%` : null)}
                </div>
                </div>
                <div id="item-textwrap">

                    <div id="item-name">
                        {props.nazev}
                    </div>
                    <div id="item-centerwrap">
                        <div id="item-rate">
                            {props.rating}/5<FaStar/>
                        </div>
                        <div id="item-price">
                            {(props.sleva !== undefined ? <div id="itemPriceBefore">{Math.floor((parseInt(props.cena.replace(/ /g,''))/parseInt(100-parseInt(props.sleva)))*100)} Kč<span id="priceLine"></span></div>: null)}
                            {props.cena} Kč
                        </div>
                    </div>
                </div>
                </a>
            </div>
            
        </>
    );
}
