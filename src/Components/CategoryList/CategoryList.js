import React, { useState, useEffect } from "react";
import "./CategoryList.css";
import Item from "./Item/Item";
export default function CategoryList(props) {

  return (
    <>

      <div id="catListWrapper" className={props.side}>
        <div id="catListScrollCont">
          <div id="catListScroll" style={{justifyContent:props.style}}>
            {props.value}
          </div>
        </div>
      </div>
    </>
  );
}
