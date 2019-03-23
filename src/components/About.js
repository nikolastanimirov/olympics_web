import React from "react";
import "../css/About.css";
import "./Navigation";

import Description from "./Description";
import Navigation from "./Navigation";
function About() {
  return (
    <div id="about-container">
      <Navigation />
      <Description />
    </div>
  );
}

export default About;
