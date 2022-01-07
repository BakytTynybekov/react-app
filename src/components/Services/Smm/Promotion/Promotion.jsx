import "./promotion.scss";

function Promotion({ img, title, descr, aOffer }) {
  return (
    <div className="promotion">
      <div className="container">
        <div className="promotion__inner">
          <div className="promotion__item">
            <h2> {title} </h2>
            <h3 className="promotion__item-descr"> {descr} </h3>
            <div>{aOffer}</div>
            <a href="/" className="promotion__item-button">
              Получить бесплатно <span>&#8250;</span>
            </a>
          </div>
          <div className="promotion__item promotion-imgPart">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
