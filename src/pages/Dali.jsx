import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Dali.module.scss';

import headerImg from '../assets/dali_bg.png';
import little1 from '../assets/dali_little1.png';
import little2 from '../assets/dali_little2.png';
import res1 from '../assets/dali_res1.png';
import res2 from '../assets/dali_res2.png';
import res3 from '../assets/dali_res3.png';
import res4 from '../assets/dali_res4.png';

const Dali = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>Dali and Picasso</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>משימה</h3>
        <article>
          <p>להכין פוסטר לתערוכה על יצירותיהם של האמנים סלבדור דאלי ופבלו פיקאסו.</p>
          <br /> <br />
          <p>השתמשו בעבודות האמנים והעברנו את הסגנון שבו עבדו.</p>
        </article>
        <div className={styles.topImgWrapper}>
          <div className={styles.imageLittle}>
            <img src={little1} alt="image" />
            <p>La persistencia de la memoria, 1931</p>
          </div>
          <div className={styles.imageLittle}>
            <img src={little2} alt="image" />
            <p>Guernica, 1937</p>
          </div>
        </div>
        <h3>תוצאה</h3>
        <img className={styles.bigImage} src={res1} alt="res1" />
        <div className={styles.botWrapper}>
          <img className={styles.bigImage} src={res2} alt="res2" />
          <img className={styles.bigImage} src={res3} alt="res3" />
        </div>

        <div className={styles.botImage}>
          <img src={res4} alt="image" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Dali;
