import React from "react";
import Link from "./Sponsors";
import Instagram from "../sources/media/instagram-icon-black.png";
import Facebook from "../sources/media/facebook.png";
import Youtube from "../sources/media/YouTube.png";

import "../css/Footer.css";
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          {" "}
          <p className="footer-title">Follow us on </p>
        </li>
        <li>
          <Link
            img={Instagram}
            alt="Instagram"
            url="https://www.instagram.com/aubg_olympics"
          />
        </li>
        <li>
          <Link
            img={Facebook}
            alt="Facebook"
            url="https://www.facebook.com/AUBGOlympics/"
          />
        </li>
        <li>
          <Link
            img={Youtube}
            alt="Youtube"
            url="https://www.youtube.com/aubg_olympics"
          />
        </li>
      </ul>
      <p className="copyright">Copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
