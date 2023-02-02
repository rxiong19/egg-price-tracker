import React from "react";

const sites = [
  "https://www.shaws.com/shop/search-results.html?q=egg",
  "https://stopandshop.com/product-search/egg?searchRef=",
];
const list = ["Shaw's", "Stop and Shop"];

const rp = require("request-promise");
const cheerio = require("cheerio");

async function getInfo(index) {
  //   let response = await rp(sites[index]);
  //   let $ = cheerio.load(response);
  return (
    <div>
      <h3>egg 1</h3>
      <p>price: $1.00</p>
    </div>
  );
}

export default function Info(props) {
  return <p>hello</p>;
}
