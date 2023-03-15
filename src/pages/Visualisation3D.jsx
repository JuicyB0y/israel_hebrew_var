import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Visualisation3D.module.scss';

import dtop1 from '../assets//3dtop1.png';
import dtop2 from '../assets/3dtop2.png';
import dtop3 from '../assets/3dtop3.png';
import dbot1 from '../assets/3dbot1.png';
import dbot2 from '../assets/3dbot2.png';

import vis1 from '../assets//3d_1.png';
import vis3 from '../assets//3d_3.png';
import vis4 from '../assets//3d_4.png';
import vis5 from '../assets//3d_5.png';
import tree from '../assets/3d_2.png';
import left2 from '../assets/left-bold.png';

import insta from '../assets/instagram-svgrepo-com.svg';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg';
import telegram from '../assets/telegram-plane-svgrepo-com.svg';

import arrow from '../assets/Arrow.png';

// const Visualisation3D = () => {
//   const { t } = useTranslation();

//   const notesArr = [
//     {
//       name: t('vis_textHeader'),
//       // eslint-disable-next-line no-multi-str
//       text: t('vis_firstText'),
//       list: [],
//     },
//   ];

//   const detailedList = [
//     {
//       count: '1.',
//       info: t('vis_stagesName1'),
//       text: t('vis_stagesText1'),
//       image: vis3,
//     },
//     {
//       count: '2.',
//       info: t('vis_stagesName2'),
//       text: t('vis_stagesText2'),
//       image: vis4,
//     },
//     {
//       count: '3.',
//       info: t('vis_stagesName3'),
//       text: t('vis_stagesText3'),
//       image: vis5,
//     },
//   ];

//   const TopImages = [
//     { url: dtop1, name: '/3dvisualization/interior' },
//     { url: dtop2, name: '/3dvisualization/architecture' },
//     { url: dtop3, name: '/3dvisualization/exterior' },
//   ];
//   const BottomImages = [
//     { url: dbot1, name: '/3dvisualization/park' },
//     { url: dbot2, name: '/3dvisualization/artobject' },
//   ];

//   const header = t('vis_mainHeader');
//   const subTitle = t('vis_mainSubHeader');
//   const resultText = t('vis_resultText');

//   const stylesFor3d = true;
//   return (
//     <div>
//       <ServicePage
//         headerText={header}
//         sectionTitle={subTitle}
//         notesArr={notesArr}
//         detailedList={detailedList}
//         TopImages={TopImages}
//         BottomImages={BottomImages}
//         resultText={resultText}
//         stylesFor3d={stylesFor3d}
//       />
//     </div>
//   );
// };

const Visualisation3D = () => {
  const { t } = useTranslation();

  const detailedList = [
    {
      count: '.1',
      info: 'הצעה מסחרית',
      text: 'אתם שולחים לנו חומרים על הפרויקט (תכניות קומה , תוכניות חזית וגינון). אנו עובדים ומגבשים הצעת מחיר מסחרית .',
      image: vis3,
    },
    {
      count: '.2',
      info: 'תוצאות ביניים',
      text: 'במהלך יצירת הפרויקט ההדמיה התלת מימדית האדריכלית, אנו שולחים לכם תוצאות ביניים אותן אתם בודקים ובמידת הצורך מבצעים שינויים משלכם.',
      image: vis4,
    },
    {
      count: '.3',
      info: 'עיבודים סופיים',
      text: 'אנו מבצעים את העיבוד הסופי של מתחם המגורים ושולחים לכם את התוצאה. אתם משלמים את יתרת הסכום עבור הפרויקט.',
      image: vis5,
    },
  ];

  const TopImages = [
    { url: dtop1, name: '/3dvisualization/interior' },
    { url: dtop2, name: '/3dvisualization/architecture' },
    { url: dtop3, name: '/3dvisualization/exterior' },
  ];
  const BottomImages = [
    { url: dbot1, name: '/3dvisualization/park' },
    { url: dbot2, name: '/3dvisualization/artobject' },
  ];

  return (
    <div className={styles.wrapper}>
      <img className={styles.vis1} src={vis1} alt="vis1" />

      <h1 className={styles.title} data-heading="3D visualization">
        3D visualization
      </h1>
      <div className={styles.service}>
        <span>Service</span>
        <div className={styles.dots_wrapper}>
          <Link to="#">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
          <Link to="#">
            <img src={insta} alt="whatsapp" />
          </Link>
          <Link to="#">
            <img src={telegram} alt="whatsapp" />
          </Link>
        </div>
      </div>
      <hr />
      <section className={styles.info}>
        <article className={styles.info_left}>
          <h4>אנחנו יודעים איך להגדיל את המכירות שלך</h4>
          {/* <p>{t('vis_firstText')}</p> */}
        </article>
        <aside className={styles.info_right}>
          <div>
            <a href="#">תשאיר את הבקשה שלך</a>
            <img src={left2} alt="arrow" />
          </div>
          <p>יעוץ חינם ונראה לך היכן להתחיל</p>
        </aside>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.card_name}>הדמיה תלת מימדית אדריכלית</span>
          <hr />
          <article className={styles.card_text}>
            אנו יוצרים תוכן פרסומי למכירות אפקטיביות. אנו מציעים שירותים להדמיה אדריכלית באיכות גבוהה של שכונות קטנות ,
            מתחמי מגורים, קוטג'ים, מבני ציבור, תעשייה ומנהלה. אנו נפתח דגם בעל רמת פירוט גבוהה ונראה את מתחם המגורים,
            מרכז המסחרי, כל חפץ אחר שלך, רק מהזוויות הטובות ביותר.
          </article>
        </div>
        <img src={tree} alt="tree" />
      </section>
      {/* <article className={styles.article}>{secondText}</article> */}
      <section className={styles.works}>
        {/* подробный stagesList*/}
        <h3 className={styles.works_subtitle}>שלבי עבודה</h3>
        <ol className={styles.detailList}>
          {detailedList.map((item) => (
            <li className={styles.detailList_item}>
              {item.image !== undefined && <img src={item.image} className={styles.icons3d} alt="icon" />}
              <span className={styles.inside}>
                <span>{item.info}</span>
                <span> {item.count}</span>
              </span>

              <hr />
              <article>{item.text}</article>
            </li>
          ))}
        </ol>

        <div className={styles.works_miniWrapper}>
          <h3 className={styles.works_subtitle}>לדוגמא</h3>
        </div>

        {/* это статичные фотки */}
        {/* {OnlyImages.length > 0 && (
          <>
            <div className={styles.works_miniWrapper}>
              <h3 className={styles.works_subtitleStatic}>{t('servPage_examples')}</h3>
            </div>
            <div className={styles.works_onlyCarousel}>
              {OnlyImages?.map((item) => (
                <div key={item} className={styles.works_cardOnly}>
                  <img className={styles.works_imgOnly} src={item} alt="card" />
                  <div className={styles.works_case}>Case</div>
                </div>
              ))}
            </div>
          </>
        )} */}
        {/* а это динамическая карусель */}
        <div
          /* className={`${styles.works_smallWrapper} ${stylesFor3d === true ? styles.works_smallWrapper3d : ''}`} */
          className={styles.works_smallWrapper}>
          <div className={cn(styles.works_carousel, styles.animate)}>
            {/* we need to make them twice for correct animation */}

            <div className={styles.works_topCarousel}>
              {TopImages?.map((item) => (
                <Link key={item} className={styles.works_cardTop} to={`${item.name}`}>
                  <img className={styles.works_card_img} src={item.url} alt="card" />
                  <p className={styles.works_card_case}>Case</p>
                </Link>
              ))}
            </div>
            <div className={styles.works_topCarousel}>
              {TopImages?.map((item) => (
                <Link key={item} className={styles.works_cardTop} to={`${item.name}`}>
                  <img className={styles.works_card_img} src={item.url} alt="card" />
                  <p className={styles.works_card_case}>Case</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* нижняя карусель */}
        <div className={styles.works_smallWrapper}>
          <div className={cn(styles.works_carousel, styles.animateRight)}>
            <div className={styles.works_bottomCarousel}>
              {BottomImages?.map((item) => (
                <Link key={item.image} className={styles.works_card} to={`${item.name}`}>
                  <img className={styles.works_card_img} src={item.url} alt="card" />
                  <p className={styles.works_card_case}>Case</p>
                </Link>
              ))}
            </div>
            <div className={styles.works_bottomCarousel}>
              {BottomImages?.map((item) => (
                <Link key={item.image} className={styles.works_card} to={`${item.name}`}>
                  <img className={styles.works_card_img} src={item.url} alt="card" />
                  <p className={styles.works_card_case}>Case</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Visualisation3D;
