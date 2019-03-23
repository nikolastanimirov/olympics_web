import React from "react";
import "../css/style.css";
import Logo from "./Logo";
import Links from "./Links";
function Navigation() {
  return (
    <div id="nav">
      <ul>
        <li>
          <Logo />
        </li>
        <li className="navi">
          <Links />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
