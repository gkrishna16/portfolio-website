import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/money.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

export default function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          {" "}
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
