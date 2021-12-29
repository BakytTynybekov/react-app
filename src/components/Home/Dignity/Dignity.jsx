import "./dignity.scss";

function Dignity() {
  const dignityData = [
    {
      img: "https://atfdigital.ru/assets/img/prof/g-ad.png",
      value: 18,
      descr: "имеют личные сертификаты Google AdWords. ",
    },
    {
      img: "https://atfdigital.ru/assets/img/prof/google-analit.png",
      value: 11,
      descr: "Имеюся личные сертификаты Google Analytics.",
    },
    {
      img: "https://atfdigital.ru/assets/img/prof/yandex.png",
      value: 7,
      descr: "Иимеют личные сертификаты Яндекс Директ.",
    },
    {
      img: "https://atfdigital.ru/assets/img/prof/metrika.png",
      value: 5,
      descr: "имеют личные сертификаты Яндекс Метрика.",
    },
  ];

  const dignityList = dignityData.map((item, index) => (
    <div className="dignity-item" key={index}>
      <img src={item.img} alt="" className="dignity-item-img" />
      <h3 className="counter-valur">{item.value}</h3>
      <h4>сотрудников</h4>
      <p>{item.descr}</p>
    </div>
  ));
  return (
    <section className="dignity">
      <h2 className="section-title">Мы профессионалы</h2>
      <div className="dignity__inner">{dignityList}</div>
    </section>
  );
}
export default Dignity;
