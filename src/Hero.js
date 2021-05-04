import "./App.css";
import "./App";
import React from "react";
function Hero() {
  return (
    <div className="Hero">
      <p style={{color:"red" }}>A 5v5 character-based tactical shooter</p>
      <img
        className="bg"
        src="https://preview.redd.it/ar0zqjskres41.jpg?width=1920&format=pjpg&auto=webp&s=d601f9a25ceab7f50aafb19114a21538789941a1"
        alt="Logo"
      />
      <img
        className="valo"
        src="https://static.fontget.com/v/a/valorant/preview@2x.png"
        alt="Logo"
      />
      <div className="playfree playnow">PLAY FREE</div>
    </div>
  );
}

export default Hero;
