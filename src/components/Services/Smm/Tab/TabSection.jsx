import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab-section.scss";
import TabPanelInner from "./TabPanel/TabPanelInner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessPawn,
  faUsers,
  faBullhorn,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function TabSection(props) {
  const numbers = props.numbers;
  console.log(numbers);
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
                      <p>Ведения общества</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon icon={faBullhorn} className="tab-icon" />
                      <p>Продвижение сообщества</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item advertisement">
                      <p>Реклама</p>
                    </div>
                  </Tab>
                  <Tab>
                    <div className="tab__select-item">
                      <FontAwesomeIcon icon={faChartBar} className="tab-icon" />
                      <p>Аналитика и отчетность</p>
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            <div className="tab__panel">
              <TabPanel>
                <TabPanelInner
                  index="1"
                  img="https://atfdigital.ru/assets/img/smm/tab-img-1.png"
                  imgClasses="tab__panel-item img-part"
                  title="Стратегия продвижения"
                  liItems={[
                    <li>
                      Проведем анализ компании, конкурентов, целевой аудитории.
                    </li>,
                    <li>Сделаем аудит социальных сетей.</li>,
                    <li>
                      Сформируем концепцию продвижения, подберем площадки,
                      форматы контента и методы продвижения.
                    </li>,
                    <li>Сделаем контент-план и рубрикатор.</li>,
                    <li>
                      Пропишем все КРІ и тайминг проекта - что, как и в какой
                      последовательности мы делаем.
                    </li>,
                  ]}
                />
              </TabPanel>
              <TabPanel>
                <TabPanelInner
                  index="2"
                  img="https://atfdigital.ru/assets/img/smm/tab-img-2.png"
                  imgClasses="tab__panel-item img-part order"
                  title="Ведения сообщества"
                  liItems={[
                    <li>
                      Комплексно оформим страницы, сообщества информация,
                      ссылки, кнопки, дизайн.
                    </li>,
                    <li>
                      Будем готовить рекламные публикации, вовлекающие анимации,
                      информационные посты.
                    </li>,
                    <li>
                      Разработаем оригинальный дизайн для оформления всех
                      публикаций.
                    </li>,
                    <li>
                      Обеспечим клиентский сервис - ответы на вопросы, обработка
                      запросов, работа с возражениями клиентов.
                    </li>,
                  ]}
                />
              </TabPanel>
              <TabPanel>
                <TabPanelInner
                  index="3"
                  img="https://atfdigital.ru/assets/img/smm/tab-img-3.png"
                  imgClasses="tab__panel-item img-part"
                  title="Продвижение сообщества"
                  liItems={[
                    <li>
                      Разработаем оригинальные интерактивы: ребусы, загадки,
                      мини-игры и т.д.
                    </li>,
                    <li>
                      Проведем конкурсы и акции - подготовим механику, описание,
                      проконтролируем выполнение.
                    </li>,
                    <li>
                      Сделаем сценарии и реализацию для Stories выездные сьемки,
                      обработка, дизайн-макеты.
                    </li>,
                    <li>
                      Проведем прямые эфиры - выездные сьемки, работа с
                      экспертами, сценарии.
                    </li>,
                    <li>Сегментируем и привлечем целевую аудиторию.</li>,
                  ]}
                />
              </TabPanel>
              <TabPanel>
                <TabPanelInner
                  index="4"
                  img="https://atfdigital.ru/assets/img/smm/tab-img-4.png"
                  imgClasses="tab__panel-item img-part order"
                  title="Реклама"
                  liItems={[
                    <li>
                      Определим разные сегменты целевой аудитории, проведем
                      тестирование разных предложений и креативов.
                    </li>,
                    <li>
                      Проведем оценку конверсии, бюджета, будем регулировать
                      стваки и оптимизировать рекламные кампании.
                    </li>,
                    <li>
                      Запустим ретаргетинг по базе клиентов, посетителей сайта,
                      конкурентам.
                    </li>,
                    <li>
                      Подберем сообщества, паблики и лидеров мнений для
                      размещения рекламы.
                    </li>,
                    <li>
                      Подготовим для этого все посты и креативы, проконтролируем
                      выполнение и эффективность.
                    </li>,
                    <li>
                      Организуем и будем контролировать рассылки по базе
                      подписчиков - акции, вопросы и ответы, привлечение новой
                      аудитории.
                    </li>,
                  ]}
                />
              </TabPanel>
              <TabPanel>
                <TabPanelInner
                  index="5"
                  img="https://atfdigital.ru/assets/img/smm/tab-img-5.png"
                  imgClasses="tab__panel-item img-part"
                  title="Аналитика и отчетность"
                  liItems={[
                    <li>
                      Будем вести аналитику по всем действиям и активностям
                      страниц в социальных сетях.
                    </li>,
                    <li>
                      Регулярно будем присылать понятные отчеты указанием всех
                      показателей и КРІ проекта.
                    </li>,
                    <li>
                      Всегда будем оставаться на связи - отвечаем на вопросы,
                      предоставляем нужные данные 24/7.
                    </li>,
                    <li>
                      Дополнительно можем работать с SERM (репутацией в сети) -
                      отслеживать все отзывы, упоминания, отрабатывать негатив,
                      возражения.
                    </li>,
                  ]}
                />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default TabSection;
