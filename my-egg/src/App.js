import React from "react";
import "./index.css";
const sites = [
  "https://www.shaws.com/shop/search-results.html?q=egg",
  "https://stopandshop.com/product-search/egg?searchRef=",
];
const list = ["Shaw's", "Stop and Shop"];
function GetInfo({ idx }) {
  return alert("hello! " + list[idx]);
}

function Board() {
  return (
    <div className="shopList">
      {list.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            className="shop"
            onClick={() => {
              // alert("you clicked a btn!");

              console.log(item + " is clicked!");

              <GetInfo idx={index} />;
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default function MyEgg() {
  return <Board />;
}
