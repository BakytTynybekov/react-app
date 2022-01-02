import Location from "./location/Location";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import {
  faInstagram,
  faVk,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./header.scss";
import SocialMedia from "./socialMedia/SocialMedia";
import Nav from "./nav/Nav";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";

function Header() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburger"
      size="40px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose className="hamburger" size="40px" onClick={() => setOpen(!open)} />
  );
  return (
    <header>
      <div className="logo-mobile">
        <h1>Orion</h1>
      </div>
      <div className="header__mobile">
        {open ? closeIcon : hamburgerIcon}
        {open && <MobileNav />}
      </div>

      <div className="header">
        <div className="header__logo">
          <h1>Orion</h1>
        </div>
        <Nav />

        <div className="header__footer">
          <Location />

          <div className="social-media">
            <SocialMedia sclMedia={faVk} />
            <SocialMedia sclMedia={faInstagram} />
            <SocialMedia sclMedia={faFacebook} />
          </div>
          <div className="copyright">
            <p>Разработано компанией</p>
            <p>
              {" "}
              <a href="/">orionlab.com</a> &copy; 2021
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
