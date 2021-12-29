import "./clients.scss";

function Clients() {
  const clientsData = [
    {
      img: "https://atfdigital.ru/assets/img/client/1.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/2.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/3.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/4.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/5.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/6.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/7.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/8.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/9.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/10.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/11.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/12.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/13.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/14.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/15.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/16.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/17.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/18.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/19.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/20.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/21.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/22.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/23.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/24.png",
    },
    {
      img: "https://atfdigital.ru/assets/img/client/25.png",
    },
  ];

  const clientsList = clientsData.map((item, index) => (
    <div className="clients-item" key={index}>
      <img src={item.img} alt="" />
    </div>
  ));

  return (
    <div className="clients">
      <h2 className="section-title">Клиенты</h2>
      <div className="clients__inner">{clientsList}</div>
    </div>
  );
}
export default Clients;
