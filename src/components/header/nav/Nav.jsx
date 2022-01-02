import "./nav.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTelegram } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li className="nav__menu-item">
          <NavLink to="/" className="nav__menu-link">
            Главная
          </NavLink>
        </li>
        <li className="nav__menu-item">
          <p className="nav__menu-link">Услуги</p>
        </li>
        <li className="nav__menu-item">
          <NavLink to="/cases" className="nav__menu-link">
            Кейсы
          </NavLink>
        </li>
        <li className="nav__menu-item">
          <NavLink to="/clients" className="nav__menu-link">
            Клиенты
          </NavLink>
        </li>
        <li className="nav__menu-item">
          <NavLink to="/news" className="nav__menu-link">
            Нововсти
          </NavLink>
        </li>
        <li className="nav__menu-item">
          <NavLink to="/contacts" className="nav__menu-link">
            Контакты
          </NavLink>
        </li>
      </ul>

      <div className="header__contacts">
        <a href="tel:+78000000000">+7 (800) 000 00 00</a>
        <a href="mailto:bakyt.tynybekov.ss@gmail.com" className="mail">
          orion@gmail.com
        </a>
        <a href="/" className="telegram">
          <FontAwesomeIcon icon={faTelegram} className="telegram-icon" />
          <span>Наш Телеграм</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
