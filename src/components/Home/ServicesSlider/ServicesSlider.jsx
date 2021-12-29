import Slider from "react-slick";
import React, { Component } from "react";

import "./servicesSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Smm from "./images/smm.svg";
import Ppc from "./images/ppc.svg";
import Serm from "./images/serm.svg";
import Development from "./images/development.svg";

export default class ServicesSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

    return (
      <div className="home__services">
        <h2 className="section-title">Услуги</h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slide">
              <a href="/">
                <img src={Smm} alt="" />
              </a>
            </div>
            <div className="slide">
              <a href="/">
                <img src={Ppc} alt="" />
              </a>
            </div>
            <div className="slide">
              <a href="/">
                <img src={Serm} alt="" />
              </a>
            </div>
            <div className="slide">
              <a href="/">
                <img src={Development} alt="" />
              </a>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
