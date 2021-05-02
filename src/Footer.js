import "./App.css";
import "./App";
import React from "react";
import tsn from './tsn.png'
import tng from './tng.png'
function Footer() {
  return (
    <div className="Footer">
      <p class="client">DOWNLOAD GAME CLIENT </p>
      <img
        className="valologo"
        src={tng}
        alt="Logo"
      />
      <p>
        © 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated logos
        are trademarks, service marks, and/or registered trademarks of Riot
        Games, Inc.
      </p>
      <div class="menu">
      <a  href="https://www.riotgames.com/en/privacy-notice">Privacy Notice</a>
      <a href="https://www.riotgames.com/en/privacy-notice">Terms of Service</a>
      <a href="https://playvalorant.com/en-us/">Cookie Preferences</a>
      </div>
      <img
        className="teen"
       src={tsn}
        alt="teen"
      />
    </div>
  );
}

export default Footer;
