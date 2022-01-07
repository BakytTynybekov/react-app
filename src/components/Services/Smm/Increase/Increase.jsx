import "./increase.scss";

function Increase({ increaseData }) {
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
