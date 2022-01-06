import "./tab-panel.scss";

function TabPanelInner({ img, imgClasses, title, liItems, index }) {
  return (
    <div className="tab__panel" index={index}>
      <div className="tab__panel-inner">
        <div className={imgClasses}>
          <img src={img} alt="" />
        </div>
        <div className="tab__panel-item text-part">
          <h3>{title}</h3>
          <ul>{liItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default TabPanelInner;
