import "./purpose.scss";

function Purpose({ descr, video, experience, incr, projects, instruments }) {
  return (
    <div className="purpose">
      <div className="container">
        <div className="purpose__inner">
          <div className="purpose__item">
            <h2 className="purpose__item-title section__inner-title">
              В ЧЕМ ЦЕЛЬ <span>ORION</span> PRODUCTION"
            </h2>
            <p className="purpose__item-descr">
              Мы – рекламное агентство полного цикла, команда которая фанатеет
              своим делом и приносит реальные результаты для бизнеса засчет
              экспертности и высокого качества <span>{descr}</span> продвижения.
            </p>
            <ul className="purpose__list">
              <li className="purpose__list-item">
                <strong>Мы про:</strong>
                <br />
                Креативные решения с учетом специфики бренда, а не однотипные
                задачи на потоке.
              </li>
              <li className="purpose__list-item">
                <strong>На связи 24/7 </strong>
                <br /> Креативные решения с учетом специфики бренда, а не
                однотипные задачи на потоке.
              </li>
              <li className="purpose__list-item">
                <strong>Измеримые результат </strong>
                <br /> Полные и понятные отчеты о проделанной работе каждый
                месяц.
              </li>
            </ul>
          </div>
          <div className="purpose__item video-part">
            <div className="videoPart">
              <video autoPlay loop muted className="video">
                <source
                  src="https://atfdigital.ru/assets/video/promo-video.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="num-part">
              <div className="num-block">
                <h3>11 лет</h3>
                <p>
                  опыта в <span>{descr}</span>
                </p>
              </div>
              <div className="num-block">
                <h3>1.9 раз</h3>
                <p>
                  увеличиваем ROI в <span>{descr}</span>, в среднем
                </p>
              </div>
              <div className="num-block">
                <h3>{projects}</h3>
                <p>выполненных проектов</p>
              </div>
              <div className="num-block">
                <h3>84</h3>
                <p>разработанных инструментов для маркетинга</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
