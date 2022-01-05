import Advantage from "./Advantage/Advantage";
import Increase from "./Increase/Increase";
import Promotion from "./Promotion/Promotion";
import Purpose from "./Purpose/Purpose";
import "./smm.scss";
import TabSection from "./Tab/TabSection";

function Smm() {
  return (
    <section className="smm">
      <Promotion />
      <Increase />
      <Advantage
        mainClasses="advantages"
        classesForImgItem="advantages__item first-order"
        title="ВЫ УЖЕ ДЕЛАЛИ SMM, НО БЕЗ РЕЗУЛЬТАТОВ?"
        img="https://atfdigital.ru/assets/img/smm/sad_man_mob.png"
        firstAdvantage="Не хватало компетенции исполнителя, фрилансера или агентства, а правки вносились слишком долго."
        secondAdvantage="Аккаунт блокировали из-за неправильных действий, а ваш бизнес терял клиентов и деньги."
        thirddAdvantage="Контент и реклама не соответствовали уровню вашего бренда - выглядели просто и шаблонно."
        fourthAdvantage="Рекламный бюджет просто «сливались» - вы даже не окупили инвестиции."
        fifthAdvantage="Не было никаких гарантий, а в итоге - не было результатов: «левые» подписчики, нет активности, нет продаж и роста бизнеса."
      />
      <Advantage
        mainClasses="advantages profit"
        classesForImgItem="advantages__item second-order"
        title="С ATF DIGITAL PRODUCTION ВЫ ПОЛУЧИТЕ ПРОФИТНЫЙ SMM"
        img="https://atfdigital.ru/assets/img/smm/smile-man-1.png"
        firstAdvantage="Начнем со стратегии и создадим индивидуальный план развития с учетом специфики бренда."
        secondAdvantage="Внедрим проверенные методики, актуальные тренды, будем использовать только «белые» способы и дадим гарантию от блокировок."
        thirddAdvantage="Подготовим профессиональный контент: съемки, продакшн, платные фото, авторские тексты. Над проектом работает целая команда с опытом 5+ лет."
        fourthAdvantage="Запустим эффективуную для бизнеса: таргетинг, ретаргетинг, размещение у блогеров, рассылки."
        fifthAdvantage="Прописываем в договоре КРІ: показатели по подписчикам, охватам, продажам и прочим целям. Если не достигаем в указанные сроки - работаем бесплатно, пока не выполним КРІ."
      />
      <Purpose
        title={["В ЧЕМ ЦЕЛЬ ", <span>ORION</span>, " PRODUCTION"]}
        descr="Мы – рекламное агентство полного цикла, команда которая фанатеет
        своим делом и приносит реальные результаты для бизнеса засчет
        экспертности и высокого качества SMM продвижения."
        firstPurpose={[
          <strong>Мы про:</strong>,
          <br />,
          "Креативные решения с учетом специфики бренда, а не однотипные задачи на потоке."
        ]}
        secondPurpose={[
          <strong>На связи 24/7 </strong>,
          <br />,
          "Креативные решения с учетом специфики бренда, а не однотипные задачи на потоке."
        ]}
        thirdPurpose={[
          <strong>Измеримые результат </strong>,
          <br />,
          "Полные и понятные отчеты о проделанной работе каждый месяц."
        ]}
        video="https://atfdigital.ru/assets/video/promo-video.webm"
        experience={[<h3>11 лет</h3>, <p>опыта в SMM</p>]}
        incr={[<h3>1.9 раз</h3>, <p>увеличиваем ROI в SMM, в среднем</p>]}
        projects={[<h3>2174</h3>, <p>выполненных проектов</p>]}
        instruments={[
          <h3>84</h3>,
          <p>разработанных инструментов для маркетинга</p>
        ]}
      />

      <TabSection/>
    </section>
  );
}

export default Smm;
