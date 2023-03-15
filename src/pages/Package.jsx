import React from 'react';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Package.module.scss';

import headerImg from '../assets/package_main.png';
import pack1 from '../assets/package_1.png';
import pack2 from '../assets/package_2.png';
import pack3 from '../assets/package_3.png';

const Package = () => {
  // const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" />
          <h1>עיצוב אריזות משקה</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>משימה</h3>
        <article>
          <p>לפתח עיצוב תווית עבור ה-IPA עם השם "TWO GEESE".</p>
          <br /> <br />
          <p>להשתמש בתמונה של שני אווזים וגופן עתיק , מתאים ברוחו לנושא.</p>
        </article>
        {/* <div className={styles.topImgWrapper}>
          <div className={styles.imageLittle}>
            <img src={little1} alt="image" />
            <p>La persistencia de la memoria, 1931</p>
          </div>
          <div className={styles.imageLittle}>
            <img src={little2} alt="image" />
            <p>Guernica, 1937</p>
          </div>
        </div> */}
        <h3>תוצאה</h3>
        <div className={styles.topWrapper}>
          <img src={pack1} alt="image" />
          <p>label “two geese”</p>
        </div>
        <div className={styles.botWrapper}>
          <img src={pack2} alt="image" />
          <img src={pack3} alt="image" />
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Package;
