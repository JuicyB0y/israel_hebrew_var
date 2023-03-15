import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Home.module.scss';

import heart from '../assets/heart_blue.png';
import emoji from '../assets/emoji_blue.png';
import flag1 from '../assets/jew_flag.png';
import flag2 from '../assets/isflag2.png';

// import reserve from '../assets/reserve.png';

const Home = () => {
  // Translation
  // const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.home_wrapper}>
      <img className={styles.flag1} src={flag1} alt="flag1_icon" />
      <div className={`${styles.header_wrapper} ${styles.header_wrapper_reversed}`}>
        <Link className={`${styles.title1} ${styles.title1_reversed}`} to="/webdevelopment">
          WEB
        </Link>
        <br />
        <Link className={`${styles.title2} ${styles.title2_reversed}`} to="/3dvisualization">
          3D
        </Link>
        <br />
        <Link className={`${styles.title3} ${styles.title3_reverseds}`} to="/logos">
          DESIGN
        </Link>
        {/* <h3 className={styles.title33} to="#">
          {t('main_title3')}
        </h3> */}
        <span className={styles.flare}></span>
        <img className={styles.heart} src={heart} alt="heart_icon" />
        <img className={styles.emoji} src={emoji} alt="emoji_icon" />
        {/* <img className={styles.flag1} src={flag1} alt="flag1_icon" /> */}
      </div>
      <p className={`${styles.text} ${styles.text_reversed}`}>
        .אנו מפתחים רעיונות ואסטרטגיות יצירתיים לפתרון בעיות עסקיות. אנו עוסקים בפרויקטים שיווקיים מורכבים, יוצרים
        אנימציה 2D ו3D , וידאו, מיתוג ועיצוב גרפי.
      </p>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
      <img className={styles.flag2} src={flag2} alt="flag2_icon" />
    </div>
  );
};

export default Home;
