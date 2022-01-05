import "./purpose.scss";

function Purpose({
  title,
  descr,
  firstPurpose,
  secondPurpose,
  thirdPurpose,
  video,
  experience,
  incr,
  projects,
  instruments
}) {
  return (
    <div className="purpose">
      <div className="container">
        <div className="purpose__inner">
          <div className="purpose__item">
            <h2 className="purpose__item-title">{title}</h2>
            <p className="purpose__item-descr">{descr}</p>
            <ul className="purpose__list">
              <li className="purpose__list-item">{firstPurpose}</li>
              <li className="purpose__list-item">{secondPurpose}</li>
              <li className="purpose__list-item">{thirdPurpose}</li>
            </ul>
          </div>
          <div className="purpose__item video-part">
            <div className="videoPart">
              <video autoPlay loop muted className="video">
                <source src={video} type="video/webm" />
              </video>
            </div>
            <div className="num-part">
              <div className="num-block">{experience}</div>
              <div className="num-block">{incr}</div>
              <div className="num-block">{projects}</div>
              <div className="num-block">{instruments}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
