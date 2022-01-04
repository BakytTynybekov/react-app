import "./advantage.scss";


function Advantage({mainClasses, classesForImgItem, title, img, firstAdvantage, secondAdvantage, thirddAdvantage, fourthAdvantage, fifthAdvantage }) {
  return (
    <div className={mainClasses}>
      <div className="container">
        
        <div className="advantages__inner">
        <div className="advantages__item">
        <h2 className="advantages__item-title">
        {title}
        </h2>
        
        <ol className="advantages__list">
          <li className="advantages__list-item">{firstAdvantage}</li>
          <li className="advantages__list-item">{secondAdvantage}</li>
          <li className="advantages__list-item"> {thirddAdvantage} </li>
          <li className="advantages__list-item"> {fourthAdvantage} </li>
          <li className="advantages__list-item"> {fifthAdvantage} </li>
        </ol>
        </div>

        <div className={classesForImgItem}>
          <img src={img} alt="" className=""/>
        </div>
        </div>
      </div>

    </div>
  );
}

export default Advantage;