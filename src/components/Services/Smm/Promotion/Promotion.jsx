import "./promotion.scss";

function Promotion() {
  return (
    <div className="promotion">
      <div className="container">
        <div className="promotion__inner">
          <div className="promotion__item">
            <h2>КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
            <h3 className="promotion__item-descr">
              SMM для малого, среднего и крупного бизнеса с гарантией результата
              - прописываем КРІ в договоре: цели, задачи, показатели
            </h3>
            <div>
              <strong>«Получите бесплатный аудит»</strong> <br />
              анализ всех ваших социальных сетей
            </div>
            <a href="/" className="promotion__item-button">
              Получить бесплатно <span>&#8250;</span>{" "}
            </a>
          </div>
          <div className="promotion__item">
            <img
              src="https://atfdigital.ru/assets/img/smm/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
