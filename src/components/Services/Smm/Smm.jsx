import Advantage from "./Advantage/Advantage";
import Increase from "./Increase/Increase";
import Promotion from "./Promotion/Promotion";
import Purpose from "./Purpose/Purpose";
import "./smm.scss";
import TabSection from "./Tab/TabSection";
import Cases from "../../Cases/Cases";
import FormHome from "../../Home/FormHome/FormHome";
import PromotionOffer from "./PromotionOffer/PromotionOffer";

function Smm() {
  return (
    <section className="smm">
      <Promotion
        img="https://atfdigital.ru/assets/img/smm/hero-img.png"
        title="КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ В СОЦИАЛЬНЫХ СЕТЯ"
        descr="SMM для малого, среднего и крупного бизнеса с гарантией результатат - прописываем КРІ в договоре: цели, задачи, показатели"
        aOffer={[
          <strong>«Получите бесплатный аудит»</strong>,
          <br />,
          " анализ всех ваших социальных сетей",
        ]}
      />
      <Increase
        increaseData={[
          {
            img: "https://atfdigital.ru/assets/img/smm/icon/2.png",
            descr: "Узнаваемость бренда",
          },
          {
            img: "https://atfdigital.ru/assets/img/smm/icon/2.png",
            descr: "Количество подписчиков",
          },
          {
            img: "https://atfdigital.ru/assets/img/smm/icon/3.png",
            descr: "Активность профиля",
          },
          {
            img: "https://atfdigital.ru/assets/img/smm/icon/4.png",
            descr: "Трафик на сайт и продажи",
          },
        ]}
      />
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
        title="С ORION PRODUCTION ВЫ ПОЛУЧИТЕ ПРОФИТНЫЙ SMM"
        img="https://atfdigital.ru/assets/img/smm/smile-man-1.png"
        firstAdvantage="Начнем со стратегии и создадим индивидуальный план развития с учетом специфики бренда."
        secondAdvantage="Внедрим проверенные методики, актуальные тренды, будем использовать только «белые» способы и дадим гарантию от блокировок."
        thirddAdvantage="Подготовим профессиональный контент: съемки, продакшн, платные фото, авторские тексты. Над проектом работает целая команда с опытом 5+ лет."
        fourthAdvantage="Запустим эффективуную для бизнеса: таргетинг, ретаргетинг, размещение у блогеров, рассылки."
        fifthAdvantage="Прописываем в договоре КРІ: показатели по подписчикам, охватам, продажам и прочим целям. Если не достигаем в указанные сроки - работаем бесплатно, пока не выполним КРІ."
      />
      <Purpose descr="SMM" projects="2174" />

      <TabSection />
      <Cases />
      <FormHome title="ПОСТАВЬТЕ НАМ ЗАДАЧУ, И МЫ НАЙДЕМ РЕШЕНИЕ" />
      <PromotionOffer />
    </section>
  );
}

export default Smm;
