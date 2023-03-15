import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Park.module.scss';

import headerImg from '../assets/park_m.png';
import taskImg from '../assets/park_panorama.png';
import park1 from '../assets/park_1.png';
import park2 from '../assets/park_2.png';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

const Park = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>פארק גלמפינג</h1>
        </div>
        <div className={styles.article}>
          <div className={styles.icons}>
            {/* <Link className={styles.icons_wrapper} to="#">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link className={styles.icons_wrapper} to="#">
                <img src={instagram} alt="instagram" />
              </Link>
              <Link className={styles.icons_wrapper} to="#">
                <img src={telegram} alt="telegram" />
              </Link> */}
          </div>
        </div>
      </section>
      <section className={styles.description}>
        <h3>משימה</h3>
        <article>בפרויקט זה, הלקוח רצה ליצור מקום לתיירות אקולוגית מאזור ריק.</article>
        <div className={styles.taskImg_wrapper}>
          <img src={taskImg} alt="graffiti" />
        </div>
        <h3 lassName={styles.description_name}>הפרויקט כולל</h3>
        <article>תכנון השטח, יצירת מתחם מרחצאות,סאונות ואזורי בילוי עם אש.</article>
      </section>
      <section className={styles.imgExamples}>
        <img src={park1} alt="exterior1" />
        <img src={park2} alt="exterior2" />
        <article>
          דברים חשובים בפרויקט הם אחדות עם הטבע, מוצרים טבעיים מחוות מקומיות ורוגע מוסרי לאורחים מהמולת העיר.{' '}
        </article>
      </section>
      <div className={styles.form}>
        <Form />
        {/* <div className={styles.contacts}> */}
        <Contacts />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Park;
