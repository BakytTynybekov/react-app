import "./cases.scss";
import Slider from "react-slick";
import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Cases extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
      ],
    };

    let casesData = [
      {
        order: "01",
        img: "https://atfdigital.ru/assets/img/case/krutoy.png",
        descr: "Академия Игоря Крутого",
      },
      {
        order: "02",
        img: "https://atfdigital.ru/assets/img/case/artreal.png",
        descr: "Art Real Estate",
      },
      {
        order: "03",
        img: "https://atfdigital.ru/assets/img/case/citypizza.png",
        descr: "Сити пицца",
      },
      {
        order: "04",
        img: "https://atfdigital.ru/assets/img/case/mgfoms.png",
        descr: "МГФОМС",
      },
      {
        order: "05",
        img: "https://atfdigital.ru/assets/img/case/zebra.png",
        descr: "Зебра",
      },
      {
        order: "06",
        img: "https://atfdigital.ru/assets/img/case/sssr.png",
        descr: "СССР",
      },
      {
        order: "07",
        img: "https://atfdigital.ru/assets/img/case/abvg.png",
        descr: "АБВГДАЧА",
      },
      {
        order: "08",
        img: "https://atfdigital.ru/assets/img/case/duma.png",
        descr: "Московская Дума",
      },
    ];

    let casesList = casesData.map((item, index) => (
      <div className="cases__item" key={index}>
        <h4>{item.order}</h4>
        <img src={item.img} alt="" />
        <h3>{item.descr}</h3>
      </div>
    ));

    return (
      <div className="cases">
        <h2 className="section-title">Наши кейсы</h2>
        <div className="cases__inner">
          <Slider {...settings}>{casesList}</Slider>
        </div>
      </div>
    );
  }
}
