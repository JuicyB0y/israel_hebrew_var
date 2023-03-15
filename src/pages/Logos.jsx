import React from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Logos.module.scss';
import ServicePage from '../components/ServicePage';

import arrow from '../assets/Arrow.png';
import cans from '../assets/2_cans.png';
import cards from '../assets/Gravity-Card.png';
import design from '../assets/art_design.png';
import brochures from '../assets/brochures.png';
import calendar from '../assets/calendar.png';
import rabbit from '../assets/rabbit.png';

// const OnlyImages = [african, house, parfume];

// const notesList = [
//   { count: '1.', info: 'Creation of a creative concept' },
//   { count: '2.', info: 'Logo development' },
//   { count: '3.', info: 'Creating key visuals' },
//   { count: '4.', info: 'Formation of TOV (tone of voice)' },
//   { count: '5.', info: 'Identity of key media' },
//   { count: '6.', info: 'Brand book preparation' },
// ];

const TopImages = [
  { url: cans, name: '/logos/package' },
  { url: cards, name: '/logos/videomaker' },
  { url: design, name: '/logos/poster' },
];
const BottomImages = [
  { url: brochures, name: '/logos/vinyl' },
  { url: calendar, name: '/logos/dali' },
  { url: rabbit, name: '/logos/rabbit' },
];

const Logos = () => {
  const notesArr = [
    {
      name: 'המוצר',
      text: 'אנו מפתחים לוגו וסגנון למוצרים חדשים ועוזרים לתת חיים חדשים למוצרים הישנים.',
    },
    {
      name: 'החברה שלנו',
      text: 'אנו הופכים את החברה למובנת יותר עבור הלקוחות ומזוהה בשוק. נתקן את המותג הנוכחי או ניצור תמונה חדשה.',
    },
    {
      name: 'אירועים',
      text: 'אנו מפתחים את הקונספט והזיהוי החזותי לאירועים ופועלים בכל אמצעי התקשורת.',
    },
    {
      name: 'תדמית המעסיק',
      text: 'אנו עוזרים לחברות למשוך ולשמר אנשים עם הכישורים והערכים הנכונים.',
    },
  ];

  // пока убрали из проекта
  // const stagesList = [
  //   { count: '1.', info: 'Creation of a creative concept' },
  //   { count: '2.', info: 'Logo development' },
  //   { count: '3.', info: 'Creating key visuals' },
  //   { count: '4.', info: 'Formation of TOV (tone of voice)' },
  //   { count: '5.', info: 'Identity of key media' },
  //   { count: '6.', info: 'Brand book preparation' },
  // ];

  const headerText = 'לוגו וזהות תאגידית';
  const sectionTitle = 'הסוכנות כוללת צוות המתמחה במיתוג: פיתוח לוגואים, זהויות ומדיה ארגונית.';
  const firstText =
    'פיתוח עיצוב עבורנו אינו רק יצירת אריזה יפה למוצרים שלך, אלא גם הגדלת היעילות של שיפור היעילות העסקית.';
  const secondText =
    'הסטודיו שלנו מספק מגוון רחב של שירותי עיצוב יצירתי לעסקים ולשיווק.  פרויקטים מורכבים ומשימות נקודתיות שמתבצעות בהתאם ללקוח.';
  const resultText = '';

  return (
    <div>
      <ServicePage
        headerText={headerText}
        sectionTitle={sectionTitle}
        firstText={firstText}
        secondText={secondText}
        notesArr={notesArr}
        TopImages={TopImages}
        BottomImages={BottomImages}
        resultText={resultText}
        // stagesList={stagesList}
      />
    </div>
  );
};

// const Logos = () => {
//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.title}>Logos and corporate identity</h1>
//       <div className={styles.service}>
//         <span>Service</span>
//         <div className={styles.dots_wrapper}>
//           <div className={styles.dots_long}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//           <div className={styles.dots_short}></div>
//         </div>
//       </div>
//       <hr />
//       <section className={styles.info}>
//         <article className={styles.info_left}>
//           <h4>
//             The agency includes a team specializing in branding: the development of logos, identities and corporate
//             identity media.
//           </h4>
//           <p>We help businesses change, new brands launch on the market, and well-known brands launch new products.</p>
//         </article>
//         <aside className={styles.info_right}>
//           <div>
//             <a href="#">Submit your application</a>
//             <img src={arrow} alt="arrow" />
//           </div>
//           <p>we will consult for free and show you where to start</p>
//         </aside>
//       </section>
//       <section className={styles.cards}>
//         {notesArr.map((item) => (
//           <div key={item.name} className={styles.card}>
//             <span className={styles.card_name}>{item.name}</span>
//             <hr />
//             <article className={styles.card_text}>{item.text}</article>
//           </div>
//         ))}
//       </section>
//       <article className={styles.article}>
//         "Packaging" and "appearance" of the project is a defining link in the formation of trust among the audience. In
//         addition, a well-designed brand sets a single tone for all points of contact, streamlines and simplifies work.
//       </article>
//       <section className={styles.works}>
//         <h3 className={styles.works_subtitle}>Work examples</h3>

//         <div className={styles.works_carousel}>
//           <div className={styles.works_topCarousel}>
//             {TopImages.map((item) => (
//               <Link key={item.image} className={styles.works_card} to="#">
//                 <img className={styles.works_card_img} src={item.image} alt="card" />
//                 <p className={styles.works_card_case}>Case</p>
//               </Link>
//             ))}
//           </div>
//           <div className={styles.works_bottomCarousel}>
//             {BottomImages.map((item) => (
//               <Link key={item.image} className={styles.works_card} to="#">
//                 <img className={styles.works_card_img} src={item.image} alt="card" />
//                 <p className={styles.works_card_case}>Case</p>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <h3 className={styles.works_subtitle}>Stages of work</h3>
//         <ol className={styles.list}>
//           {notesList.map((item) => (
//             <li className={styles.list_item}>
//               <span>{item.count}</span> {item.info}
//             </li>
//           ))}
//         </ol>
//         <h3 className={styles.works_subtitle}>Result</h3>

//         <article className={styles.article}>
//           The key result of the work is the emergence of rules according to which the subsequent marketing support of
//           the product will be carried out by the internal team and any involved marketing contractors, with an
//           understanding of the style and boundaries within which the company's communication with the target audience is
//           built.
//         </article>
//       </section>
//       <div className={styles.form}>
//         <Form />
//         <Contacts />
//       </div>
//     </div>
//   );
// };

export default Logos;
