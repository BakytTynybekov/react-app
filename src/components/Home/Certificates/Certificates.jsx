import Slider from "react-slick";
import React, { Component } from "react";
import "./certificates.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "./images/index";

export default class Certificates extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplay: true,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };

    const certificatesData = [
      { img: Image1 },
      { img: Image2 },
      { img: Image3 },
      { img: Image4 },
      { img: Image5 },
      { img: Image6 },
      { img: Image7 },
      { img: Image8 },
      { img: Image9 },
      { img: Image10 },
      { img: Image11 },
    ];

    const certificatesList = certificatesData.map((item, index) => (
      <div className="certificates__item" key={index}>
        <img src={item.img} alt="" />
      </div>
    ));
    return (
      <div className="certificates">
        <h2 className="section-title">Сертификаты</h2>
        <div className="certificates__inner">
          <Slider {...settings}>{certificatesList}</Slider>
        </div>
      </div>
    );
  }
}
