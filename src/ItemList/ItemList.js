import React, { useState, useEffect } from "react";
import "./ItemList.css";
import Header from "../Components/Header/Header.js";
import { FaStar } from "react-icons/fa";
import ItemList from '../Components/ItemList/ItemList.js'
import Footer from '../Components/Footer/Footer.js'

let queryString = window.location.search;
queryString = queryString.slice(1);
console.log(queryString);

export default function Itemlist() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [rate, setRate] = useState();
  const [url, setUrl] = useState();
  const [sleva, setSleva] = useState();
  const [kategorie, setKategorie] = useState("");

  const getPolozkaById = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/polozky/polozka/${queryString}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      setKategorie(data.polozka.kategorie);
      setName(data.polozka.nazev);
      setPrice(data.polozka.cena);
      setDesc(data.polozka.popisek);
      setRate(data.polozka.hodnoceni);
      setUrl(data.polozka.obrazek);
      setSleva(data.polozka.sleva);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getPolozkaById();
  }, []);

  return (
    <>
      <Header />
      <div id="ItemInfoWrapper">
        <div id="ItemInfoImage">
          <img src={`${url}`} alt="obrazek itemu"></img>
        </div>
        <div id="ItemInfoInfo">
          <div id="ItemInfoName">{name}</div>
          <div id="ItemInfoSplit">
            <div id="ItemInfoKat">{kategorie}</div>
            <div id="ItemInfoRating">{rate}/5<FaStar/></div>
          </div>
          <div id="ItemInfoPopis">{desc}</div>
          <div id="ItemInfoSplit">
          <div id="ItemCenaSplit">
            {(sleva > 0 ? <div id="ItemInfoCena" className="priceBefore"><span style={{textDecoration:'line-through'}}>{Math.floor((parseInt(price.replace(/ /g,''))/parseInt(100-parseInt(sleva)))*100)} Kč</span> - {sleva}%</div>:null)}
            <div id="ItemInfoCena">{price} Kč</div>
            </div>
            <div id="ItemInfoButton">Zakoupit</div>
          </div>
        </div>
      </div>
      {kategorie && <ItemList name={kategorie} text={kategorie} typ={"kategorie"} />}
      <Footer />
    </>
  );
}