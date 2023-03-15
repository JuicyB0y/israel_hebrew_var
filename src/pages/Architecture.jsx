import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Architecture.module.scss';

import bgImg from '../assets/arch_mainBg.png';
import concept1 from '../assets/arch_concept1.png';
import concept2 from '../assets/arch_concept2.png';
import concept3 from '../assets/arch_concept3.png';
import left1 from '../assets/arch_left1.png';
import left2 from '../assets/arch_left2.png';
import left3 from '../assets/arch_left3.png';
import right1 from '../assets/arch_right1.png';
import right2 from '../assets/arch_right2.png';
import black from '../assets/blackBg.png';

const Architecture = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={bgImg} alt="bgImage" /* className={styles.image} */ />
          <h1>קונספט אדריכלי בתוך ז'אנר "בית מעץ".</h1>
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
        <article>
          עבור כל אדריכל או מעצב פנים , פרויקט בית עץ הוא סוג של משחק והזדמנות נדירה להרגיש שוב כמו ילד.
          <br /> <br />
          זוהי עבודה מרובת משימות שבה פתרונות הנדסיים חייבים להיות בשילוב עם גישה יצירתית לתכנון, ידידותיות לסביבה
          ועיצוב מיוחד.
        </article>
        <div className={styles.imgWrapper}>
          <img src={concept1} alt="conceptImg" />
          <img src={concept2} alt="conceptImg" />
        </div>
        <img className={styles.bigImgConcept} src={concept3} alt="conceptImg" />
        <h3>משימה</h3>
        <article>
          מטרת הפרויקט זה הייתה ליצור בית ייחודי לשימוש נוסף כהשכרה יומית לכל ימות השנה. הבית מיועד לזוגות ולקבוצות
          קטנות.
        </article>
        <div className={styles.images}>
          <img className={styles.black} src={black} alt="black" />
          <div className={styles.images_left}>
            <img src={left1} alt="left1" />
            <img src={left2} alt="left2" />
            <img src={left3} alt="left3" />
          </div>
          <div className={styles.images_right}>
            <img src={right1} alt="right1" />
            <img src={right2} alt="right2" />
          </div>
        </div>
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

export default Architecture;
