import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './ArtObject.module.scss';

import headerImg from '../assets/art_main.png';
import art1 from '../assets/art_1.png';
import art2 from '../assets/art_2.png';

const ArtObject = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>אזור אמנותי</h1>
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
        <h3>חפץ אמנות ועיצוב נוף של השטח ליד הכיכר</h3>
        <article>
          חפץ האמנות זה מוקדש לתחנת השאיבה Alekseevskaya בשכונת Alekseevsky במוסקבה.
          <br /> <br />
          תחנה זו היא אחת הבניינים הבודדים של רוסיה ששרדו עוד מלפני המהפכה באזור. <br /> <br />
          האובייקט נועד לאחד את התושבים המקומיים של האזור ולהסב את תשומת הלב לבעיית היעלמות של מונומנטים אדריכליים.
        </article>
      </section>
      <section className={styles.imgExamples}>
        <img src={art1} alt="art1" />
        <img src={art2} alt="art2" />
      </section>
      <h3 className={styles.imgExamples_name}>עיצוב</h3>
      <article className={styles.imgExamples_text}>{t('art_designText')}</article>
      <div className={styles.form}>
        <Form />
        {/* <div className={styles.contacts}> */}
        <Contacts />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ArtObject;
