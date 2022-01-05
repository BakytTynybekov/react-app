import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab-section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessPawn,
  faUsers,
  faBullhorn,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

function TabSection() {
  return (
    <div className="tab">
      <div className="container">
        <h2 className="section-title">
          КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ В СОЦИАЛЬНЫХ СЕТЯХ
        </h2>

        <Tabs>
          <div className="tab__inner">
            <div className="tab__select">
              <TabList>
                <div className="tab__select-inner">
                  <Tab classID="tab__select-item">
                    <div className="tab__select-item">
                      <FontAwesomeIcon
                        icon={faChessPawn}
                        className="tab-icon"
                      />
                      <p>Стратегия продвижения</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon icon={faUsers} className="tab-icon" />
                      <p>Стратегия продвижения</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon icon={faBullhorn} className="tab-icon" />
                      <p>Стратегия продвижения</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon icon={faChartBar} className="tab-icon" />
                      <p>Стратегия продвижения</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon
                        icon={faChessPawn}
                        className="tab-icon"
                      />
                      <p>Стратегия продвижения</p>
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            <div className="tab__panel">
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default TabSection;
