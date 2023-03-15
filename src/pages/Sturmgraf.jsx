import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Sturmgraf.module.scss';

import mainBg from '../assets/sturmgrafBack.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';
import graffiti from '../assets/writing.png';
import rabbits from '../assets/mix-rabbits.png';
import wall from '../assets/wall.png';
import blue from '../assets/color-blue.png';
import shirts from '../assets/shirts.png';

const Sturmgraf = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
        </div>
        <div className={styles.article}>
          <h1>לוגו לחנות של מוצרים לרכב “Sturmgraf”</h1>
          {/* <div className={styles.icons}>
            <Link className={styles.icons_wrapper} to="#">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link className={styles.icons_wrapper} to="#">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link className={styles.icons_wrapper} to="#">
              <img src={telegram} alt="telegram" />
            </Link>
          </div> */}
        </div>
      </section>
      <section className={styles.description}>
        <h3>משימה</h3>
        <article>
          לפתח לוגו לחנות עם מוצרי רכב. כמו כן, החנות עוסקת בייצור ומכירה של מדבקות לרכב.
          <br />
          הלקוח בחר את הארנב מהסרט המצויר "החיים הסודיים של חיות המחמד" כסמל למותג שלו . הלקוח רצה לוגו צבעוני וקליט.
        </article>
        <div className={styles.graffiti_wrapper}>
          <img src={graffiti} alt="graffiti" />
        </div>
        <h3>פתרון</h3>
        <article>
          פני הלוגו הם ארנב
          <br />
          פרטים כמו רגש ומיקומו של הארנב נחלטו עם הלקוח מראש.
          <br />
          השתמשנו בגופן «tag type» בהשראת תגי גרפיטי.
        </article>
        <div className={styles.markup}>
          <div className={styles.markup_one}>
            <img src={blue} alt="blue" />
          </div>
          <div className={styles.markup_two}></div>
          <div className={styles.markup_three}></div>
          <div className={styles.markup_four}></div>
        </div>
        <div className={styles.logo_images}>
          <img src={rabbits} alt="rabbits" />
        </div>
        <h3>מותג</h3>
        <div className={styles.logo_images}>
          <img src={shirts} alt="shirts" />
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.graffiti_img}>
          <img src={wall} alt="graffiti-wall" />
        </div>
        <div className={styles.form}>
          <Form />
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default Sturmgraf;
