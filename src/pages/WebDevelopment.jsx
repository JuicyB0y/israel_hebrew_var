import React from 'react';
import { useTranslation } from 'react-i18next';

import ServicePage from '../components/ServicePage';

import web1 from '../assets/web_1.png';
import web2 from '../assets/web_2.png';
import web3 from '../assets/web_3.png';
import web4 from '../assets/web_4.png';
import web_pic1 from '../assets/web_pic1.png';
import web_pic2 from '../assets/web_pic2.png';
import web_pic3 from '../assets/web_pic3.png';
import web_pic4 from '../assets/web_pic4.png';

const WebDevelopment = () => {
  const { t } = useTranslation();
  const notesArr = [
    {
      name: 'עמוד מצגת',
      text: '.מייצג מידע עליך כמתמחה או על החברה שלך. מספר על השירותים שאתה נותן ועל הניסיון המקצועי שלך. למעשה, זהו המצגת וכרטיס הביקור שלך עבור לקוחות ומעסיקים',
      list: [],
      image: web1,
    },
    {
      name: 'קידום של האתר',
      text: 'אנו מתמקדים בשירות, מוצר או קמפיין שיווקי ספציפי. זה יעזור להגדיל את הביקוש להצעה ספציפית כדי לבלוט מהמתחרים, להבין את רמת הביקוש בשוק',
      list: [],
      image: web2,
    },
    {
      name: '(Traffic and SEO) תנועה וקידום אתרים',
      text: '.אתה רוצה לראות תנועה גבוהה של משתמשים המבקרים באתר שלך. המטרה היא לדרג למקום הראשון בתוצאות החיפוש של גוגל עבור מונחי החיפוש החשובים ביותר לקהל היעד שלך. לספר על המוצר שלך לכמה שיותר קונים פוטנציאליים',
      list: [],
      image: web3,
    },
    {
      name: 'אתרים מרכזיים',
      text: 'באתרים אלו אנו מתכוונים לאתרים ארגוניים גדולים עם מספר רב של דפים וחנויות מקוונות.',
      list: [],
      image: web4,
    },
  ];

  const stagesList = [
    {
      count: '.1',
      info: 'אנליטיקה ועיצוב אתרים',
    },
    {
      count: '.2',
      info: 'פיתוח והתאמה של עיצוב אתרים',
    },
    {
      count: '.3',
      info: 'פריסה, תכנות ובדיקה של האתר',
    },
    {
      count: '.4',
      info: '.תמיכה טכנית (לאחר ההשקה, נוכל להמשיך לתמוך טכנית בפתרון שפותח ולעזור בתוכן)',
    },
  ];

  const OnlyImages = [
    { image: web_pic1, link: '/webdevelopment/valkirye' },
    { image: web_pic2, link: '/webdevelopment/murmansk' },
    { image: web_pic3, link: '/webdevelopment/eclipse' },
    { image: web_pic4, link: '/webdevelopment/integrity' },
  ];

  const header = 'בניית אתרים';
  const subTitle = 'למה צריך אתר אינטרנט?';
  const firstText =
    'נוכחות מקוונת של העסק, ללא קשר לתעשייה, יכולה להיות בעלת השפעה עצומה על הצלחתו. בעידן זה, חלק מהעסקים עדיין לא מבינים שרוב הלקוחות שלהם יבקרו באתר שלהם לפני שיבצעו רכישה.';
  const resultText =
    'נוכחות מקוונת של העסק, ללא קשר לתעשייה, יכולה להיות בעלת השפעה עצומה על הצלחתו. בעידן זה, חלק מהעסקים עדיין לא מבינים שרוב הלקוחות שלהם יבקרו באתר שלהם לפני שיבצעו רכישה.';
  return (
    <div>
      <ServicePage
        headerText={header}
        sectionTitle={subTitle}
        firstText={firstText}
        notesArr={notesArr}
        stagesList={stagesList}
        resultText={resultText}
        OnlyImages={OnlyImages}
      />
    </div>
  );
};

export default WebDevelopment;
