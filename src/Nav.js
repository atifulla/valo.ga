import "./App.css";
import "./App";
import React from "react";
function Nav() {
  return (
    <div className="Nav">
      <div className="riotgames">
        riot<a>GAMES</a>
      </div>
      <img
        className="logo"
        src="https://images.hdqwalls.com/download/4k-valorant-logo-ib-500x500.jpg"
        alt="Logo"
      />
      <div>info</div>
      <div>media</div>
      <div>news</div>
      <div>leaderboard</div>
      <div>support</div>
      <div className="playnow">PLAY NOW</div>
    </div>
  );
}

export default Nav;
