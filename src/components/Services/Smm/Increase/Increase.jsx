import "./increase.scss";

function Increase() {
  const increaseData = [
    {
      img: "https://atfdigital.ru/assets/img/smm/icon/2.png",
      descr: "Узнаваемость бренда"
    },
    {
      img: "https://atfdigital.ru/assets/img/smm/icon/2.png",
      descr: "Количество подписчиков"
    },
    {
      img: "https://atfdigital.ru/assets/img/smm/icon/3.png",
      descr: "Активность профиля"
    },
    {
      img: "https://atfdigital.ru/assets/img/smm/icon/4.png",
      descr: "Трафик на сайт и продажи"
    }
  ];
  return (
    <div className="increase">
      <div className="container">
        <h2 className="increase-title">УВЕЛИЧИМ:</h2>
        <div className="increase__inner">
          {increaseData.map((item, idx) => (
            <div className="increase__item" key={idx}>
              <img src={item.img} alt="" />
              <p>{item.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Increase;
