import React from "react";
import "./index.css";

function Board() {
  const list = ["Shaw's", "Stop and Shop"];
  return (
    <div className="shopList">
      {list.map((item, index) => {
        return <button className="shop">{item}</button>;
      })}
    </div>
  );
}

export default function MyEgg() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
