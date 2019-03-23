import React from "react";
import Sports from "./Sports";
import Dodgeball from "../sources/sports/dodgeball.jpg";
import Arm from "../sources/sports/arm.jpg";
import Bowling from "../sources/sports/bowling.jpg";

import "../css/SportsData.css";

function SportsData() {
  return (
    <div className="sports">
      <ul>
        <li>
          <Sports
            img={Dodgeball}
            alt="Dodgeball"
            url="https://www.google.com"
            title="Dodgeball"
          />
        </li>
        <li>
          <Sports
            img={Arm}
            alt="Arm"
            url="https://www.google.com"
            title="Arm"
          />
        </li>
        <li>
          <Sports
            img={Bowling}
            alt="Bowling"
            url="https://www.google.com"
            title="Bowling"
          />
        </li>
        <li>
          <Sports
            img={Bowling}
            alt="Bowling"
            url="https://www.google.com"
            title="Bowling"
          />
        </li>
      </ul>
    </div>
  );
}

export default SportsData;
