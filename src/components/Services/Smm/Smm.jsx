import Advantage from "./Advantage/Advantage";
import Increase from "./Increase/Increase";
import Promotion from "./Promotion/Promotion";
import "./smm.scss";

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
    </section>
  );
}

export default Smm;
