import React from "react";
import Promotion from "../Smm/Promotion/Promotion";
import Increase from "../Smm/Increase/Increase";
import Advantage from "../Smm/Advantage/Advantage";
import Purpose from "../Smm/Purpose/Purpose";
import Cases from "../../Cases/Cases";
import FormHome from "../../Home/FormHome/FormHome";

function Ppc() {
  return (
    <div>
      <Promotion
        img="https://atfdigital.ru/assets/img/ppc/hero-img.png"
        title="РЕЗУЛЬТАТИВНАЯ КОНТЕКСТНАЯ РЕКЛАМА В YANDEX DIRECT И GOOGLE ADS"
        descr="PPC для малого и средного бизнеса с гарантией результата - прописываем КРІ в договоре:
        цели, задачи, показатели"
        aOffer={[
          <strong>««Получите бесплатный тест-драйв наших услуг» »</strong>,
        ]}
      />
      <Increase
        increaseData={[
          {
            img: "https://atfdigital.ru/assets/img/ppc/icon/1.png",
            descr: "Продажи",
          },
          {
            img: "https://atfdigital.ru/assets/img/ppc/icon/2.png",
            descr: "Трафик на сайт",
          },
          {
            img: "https://atfdigital.ru/assets/img/ppc/icon/3.png",
            descr: "Охваты",
          },
          {
            img: "https://atfdigital.ru/assets/img/ppc/icon/4.png",
            descr: "Позицию сайта",
          },
        ]}
      />
      <Advantage
        mainClasses="advantages"
        classesForImgItem="advantages__item first-order"
        title="ВЫ УЖЕ ЗАКАЗЫВАЛИ РЕКЛАМУ В GOOGLE И YANDEX, НО БЕЗ РЕЗУЛЬТАТОВ?"
        img="https://atfdigital.ru/assets/img/smm/sad_man_mob.png"
        firstAdvantage="Не хватало компетенции исполнителя, фрилансера или агентства, а правки вносились слишком долго.
        "
        secondAdvantage="Объявления блокировали из-за неправильных действий, а ваш бизнес терял клиентов и деньги."
        thirddAdvantage="Конкуренты показывались на позициях выше. Автоматизация была недостаточно хорошо проработана.
        "
        fourthAdvantage="Рекламные бюджеты просто «сливались» - вы даже не окупили инвестиции.
        "
        fifthAdvantage="Не было никаких гарантий, а в результате нет продаж и роста бизнеса.
        "
      />
      <Advantage
        mainClasses="advantages profit"
        classesForImgItem="advantages__item second-order"
        title="С ORION PRODUCTION ВЫ ПОЛУЧИТЕ ПРОФИТНЫЙ PPC КАНАЛ"
        img="https://atfdigital.ru/assets/img/smm/smile-man-1.png"
        firstAdvantage="Начнем со стратегии и создадим индивидуальный план развития с учетом специфики бренда."
        secondAdvantage="Внедрим проверенные методики, актуальные тренды, будем использовать только «белые» способы и дадим гарантию от блокировок."
        thirddAdvantage="Подготовим профессиональный контент: съемки, продакшн, платные фото, авторские тексты. Над проектом работает целая команда с опытом 5+ лет."
        fourthAdvantage="Запустим эффективуную для бизнеса: таргетинг, ретаргетинг, размещение у блогеров, рассылки."
        fifthAdvantage="Прописываем в договоре КРІ: показатели по подписчикам, охватам, продажам и прочим целям. Если не достигаем в указанные сроки - работаем бесплатно, пока не выполним КРІ."
      />
      <Purpose descr="PPC" projects="842" />
      <Cases />
      <FormHome />
    </div>
  );
}

export default Ppc;
