import "./App.css";
import React from "react";
import "./App";

function Clips() {
  return (
    <div>
      <div className="Clips">
        <h1 className="latest">LATEST NEWS</h1>
        <a className="goto" href="https://playvalorant.com/en-us/news/">GO TO NEWSPAGE</a>
      </div>
      <div className="images">
        <div className="">
          <img className="size"
            src="https://i.ytimg.com/vi/Wrdh5HrOCMc/maxresdefault.jpg"
            alt="Logo"
          />
          <h3>Updating the Privacy Notice and Terms of Service</h3>
        </div>

        <div className="">
          <img className="size"
            src="https://specials-images.forbesimg.com/imageserve/5ef1b00e8548c80006be762b/960x0.jpg?fit=scale"
            alt="Logo"
          />
          <h3>VCT CHALLENGERS NA AND AIM LAB ANNOUNCE THE AIM LAB COMBINE</h3>
        </div>

        <div className="">
          <img className="size"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86MwG7YF3zSaFfA16AyKttaB1Cly44u4FXQ&usqp=CAU"
            alt="Logo"
          />
          <h3>VCT STAGE 2 - CHALLENGERS NA - PLAYOFFS START APRIL 29</h3>
        </div>
      </div>
    </div>
  );
}
export default Clips;
