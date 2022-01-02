import "./history.scss";

function History() {
  return (
    <section className="history">
      <h2 className="section-title">История агенства</h2>
      <h3 className="history-descr">
        Свою историю мы измеряем в успешно
        <br />
        проведенных рекламных кампаниях для наших клиентов
      </h3>
      <div className="history-inner">
        <div className="row-item">
          <h3>512</h3>
          <p>довольных клиентов</p>
        </div>
        <div className="row-item">
          <img src="https://atfdigital.ru/assets/img/graph.png" alt="" />
        </div>
      </div>
    </section>
  );
}
export default History;
