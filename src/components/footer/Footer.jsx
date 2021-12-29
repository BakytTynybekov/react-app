import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.scss";
import {
  faTelegram,
  faInstagram,
  faVk,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Наши офисы</h2>
      <div className="footer__inner">
        <div className="footer__map">
          <img
            src="https://static.ssl.mts.ru/mts_media/images/materials/Karty_v_ruki_921.jpg"
            alt=""
          />
        </div>
        <div className="footer__contacts">
          <a href="tel:+78000000000" className="contacts-link">
            +7 (800) 000 00 00
          </a>
          <a href="mailto:info@orion.com" className="contacts-link">
            info@orion.com
          </a>
          <p className="footer__location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
            Офис: г.Москва, Красная площадь, 9
          </p>
          <div className="footer__socialMedia">
            <p>Наши соц сети:</p>
            <a href="" className="social-media-icon">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="" className="social-media-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="social-media-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
