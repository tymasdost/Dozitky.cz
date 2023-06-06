import React, { useState, useEffect } from "react";
import './Itemlisting.css';
import Header from '../Components/Header/Header.js'
import ListingHeader from '../Components/ListingHeader/ListingHeader.js'
import CategoryList from '../Components/CategoryList/CategoryList.js'
import Item from "../Components/CategoryList/Item/Item";
import Footer from "../Components/Footer/Footer";

let queryString = window.location.search;
queryString = queryString.slice(1);
console.log(queryString);
export default function Itemlisting() {

  window.onscroll = ()=> {
    const drp = document.getElementById("dropDown");
    const lwrp = document.getElementById("ListingHWrapper")
    const lcont = document.getElementById("ListingContainer")
    drp.style.transform = "none"
    lwrp.style.fontSize = "12vh"
    lcont.style.height = "40vh"
    lcont.style.marginTop = "10vh"
  }

  const [katName, setKatName] = useState(queryString);
  const [katImg, setKatImg] = useState(queryString);
  const [itemArrays, setItemArrays] = useState([]);

  const getKategoriInfo = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/kategorie/kategorieDetaily/${queryString}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      if (data.kategorie && data.kategorie.nazev) {
        setKatName(data.kategorie.nazev);
        setKatImg(data.kategorie.pozadi);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPolozky = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:3000/polozky/kategorie/${queryString}`,
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

      const categoryLists = [];

      if (items.length != 1) {
        for (let i = 0; i < items.length; i += 4) {
          const categoryItems = items.slice(i, i + 4);
          const isEven = i / 4 % 2 === 0;
          const categoryList = (
            <CategoryList
              value={categoryItems}
              key={i}
              side={isEven ? "catListLeft" : "catListRight"}
              style={isEven ? "right" : "left"}
            />
          );
          categoryLists.push(categoryList);
        }
      } else {
        categoryLists.push(items[0]);
        document.getElementById("catListBox").style.justifyContent = "center";
        document.getElementById("catListBox").style.display = "flex";
        document.getElementById("catListBox").style.height = "50vh";
      }
      setItemArrays(categoryLists);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPolozky();
    getKategoriInfo();
  }, []);

  return (
    <>
      <div id="dropDown">
        <Header />
      </div>
      <ListingHeader name={katName} url={katImg}/>
      <div id="catListBox">
        {itemArrays}
      </div>
      <Footer/>
    </>
  );
}