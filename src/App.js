import React from "react";
import About from "./components/About";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Arrow from "./components/Arrow";
import Countdown from "./components/countdown/Coutdown";
import Display from "./components/SponsorsData";
import Footer from "./components/Footer";
import Sports from "./components/SportsData";
import "./css/Countdown.css";
import "./css/style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="main-logo">
          {" "}
          <Logo />
        </div>
        <div className="countdown">
          <Countdown />
          <Button />
          <div className="arrow-down">
            <Arrow />
          </div>
        </div>
        <About />
        <Display />
        <Sports />
        <Footer />
      </div>
    );
  }
}
export default App;
