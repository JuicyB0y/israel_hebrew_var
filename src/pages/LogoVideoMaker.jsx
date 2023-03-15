import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './LogoVideoMaker.module.scss';

import gravity from '../assets/gravity-dark.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import telegram from '../assets/telegram.png';
import visual1 from '../assets/visual1.png';
import visual2 from '../assets/visual2.png';
import colors from '../assets/colors.png';
import moreColors from '../assets/moreColors.png';
import colorLogos from '../assets/colorLogos.png';
import oneLogo from '../assets/OneLogo.png';
import premiumBg from '../assets/premium_Bg.png';
import gravityBg from '../assets/gravity_Bg.png';
import videoMaker from '../assets/videoMaker.mp4';

const LogoVideoMaker = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={gravity} alt="cardsImage" />
        </div>
        {/* <div className={styles.article}>
        <div className={styles.icons}>
          <Link className={styles.icons_wrapper} to="#">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link className={styles.icons_wrapper} to="#">
            <img src={instagram} alt="instagram" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
              <path d="M 8 3 C 5.2 3 3 5.2 3 8 L 3 16 C 3 18.8 5.2 21 8 21 L 16 21 C 18.8 21 21 18.8 21 16 L 21 8 C 21 5.2 18.8 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.7 5 19 6.3 19 8 L 19 16 C 19 17.7 17.7 19 16 19 L 8 19 C 6.3 19 5 17.7 5 16 L 5 8 C 5 6.3 6.3 5 8 5 z M 17 6 C 16.4 6 16 6.4 16 7 C 16 7.6 16.4 8 17 8 C 17.6 8 18 7.6 18 7 C 18 6.4 17.6 6 17 6 z M 12 7 C 9.2 7 7 9.2 7 12 C 7 14.8 9.2 17 12 17 C 14.8 17 17 14.8 17 12 C 17 9.2 14.8 7 12 7 z M 12 9 C 13.7 9 15 10.3 15 12 C 15 13.7 13.7 15 12 15 C 10.3 15 9 13.7 9 12 C 9 10.3 10.3 9 12 9 z" />
            </svg>
          </Link>
          <Link className={styles.icons_wrapper} to="#">
            <img src={telegram} alt="telegram" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445 c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758 c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125 c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077 C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
            </svg>
          </Link>
        </div>
        </div> */}
      </section>
      <section className={styles.description}>
        <h1>לוגו לצלם וידאו</h1>
        <h3>משימה</h3>
        <article>
          לפתח לוגו תמציתי ומינימליסטי ליוצר וידאו. הלקוח גם הזמין את האנימציה של הלוגו להכנסתה בתחילת ובסוף של הסרטון .
          <br /> <br />
          הלקוח מסר רק את שם החברה - "REC NO OFF".
        </article>
        <h3>פתרון</h3>
        <article>
          לזיהוי לוגו, בחרנו את צורת צמצם המצלמה.
          <br /> <br />
          נשקלו ערכות צבעים שונות של הלוגו , אך הלקוח הסתפק בשחור.
          <br /> <br />
          לטקסט בחרנו 2 פונטים - Arial Black Regular ו-Bahnschrift Regular. זה נותן רצינות ללוגו, אבל באותו הזמן נראה
          ידידותי.
        </article>

        <div className={styles.visualWrapper}>
          <img src={visual1} alt="first" />
          <p>{t('video_img1')}</p>
        </div>
        <div className={styles.visualWrapper}>
          <img src={visual2} alt="second" />
          <p>{t('video_img2')}</p>
        </div>
        <div className={styles.colorWrapper}>
          <div className={styles.colorWrapper_first}>
            <img src={colors} alt="colors" />
            <p>{t('video_palette')}</p>
          </div>
          <div className={styles.colorWrapper_second}>
            <img src={moreColors} alt="moreColors" />
            <p>{t('video_var')}</p>
          </div>
        </div>
        <div className={styles.logosWrapper}>
          <img src={colorLogos} alt="colorLogos" />
        </div>
        <p className={styles.text}>{t('video_search')}</p>
        <div className={styles.logoProptotype}>
          <img src={oneLogo} alt="oneLogo" />
          <p>הגרסה הסופית, שהלקוח מאוד אהב</p>
        </div>

        <div className={styles.videoWrapper}>
          <p>{t('video_preview')}</p>
          <video controls>
            <source src={videoMaker} type="video/mp4" />
            <source src={videoMaker} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.imageBg}>
          <img src={premiumBg} alt="premiumBg" />
          <img className={styles.imageBg_gravity} src={gravityBg} alt="gravityBg" />
        </div>
        <div className={styles.form}>
          <Form />
          <Contacts />
        </div>
      </section>
    </div>
  );
};

export default LogoVideoMaker;
