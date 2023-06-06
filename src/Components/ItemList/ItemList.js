import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Item from "./Item/Item";

export default function ItemList(props) {
  const [itemArray, setItemArray] = useState([]);

  const getPolozky = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/polozky/${props.typ}/${props.name}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      const items = data.polozky.map((polozka, index) => (
        <Item nazev={polozka.nazev} rating={polozka.hodnoceni} cena={polozka.cena} obrazek={polozka.obrazek} sleva={polozka.sleva} url={polozka._id} key={index} />
      ));
      setItemArray(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPolozky();
  }, []);


  

  return (
    <>
      <div id="itemlist">
        <div id="itemlist-header">
          <span id="itemlist-rotate">{props.text}</span>
        </div>
        <div id="itemlist-wrapper">
          <div className="itemlist-container" id={props.name}>
            {itemArray}
          </div>
        </div>
      </div>
    </>
  );
}
