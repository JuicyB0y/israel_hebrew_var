import React from 'react';

import Contacts from '../components/Contacts';
import Form from '../components/Form';
import styles from './Exhibition.module.scss';

import headerImg from '../assets/poster_main.png';
import poster_1 from '../assets/poster_little1.png';
import poster_2 from '../assets/poster_little2.png';
import poster_3 from '../assets/poster_little3.png';
import poster_4 from '../assets/poster_little4.png';
import poster_5 from '../assets/poster_little5.png';
import result from '../assets/poster_res.png';

import pack1 from '../assets/package_1.png';
import pack2 from '../assets/package_2.png';
import pack3 from '../assets/package_3.png';

const Exhibition = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" />
          <h1>כרזת התערוכה</h1>
        </div>
      </section>
      <section className={styles.description}>
        <h3>משימה</h3>
        <article>
          <p>להכין פוסטר לאירוע על מעצבי old and new school.</p>
          <br /> <br />
          <p>להשתמש בעקרון העבודה של המעצבת תרזה רולר וסטודיו העיצוב CYAN.</p>
        </article>

        <div className={styles.topWrapper}>
          <img src={poster_1} alt="image" />
          <img src={poster_2} alt="image" />
          <img src={poster_3} alt="image" />
          <img src={poster_4} alt="image" />
          <img src={poster_5} alt="image" />
        </div>
        <div className={styles.imageText}>
          <p>options offered to the customer</p>
        </div>
        <h3>תוצאה</h3>
        <div className={styles.botWrapper}>
          <img src={result} alt="image" />
          <p>customer approved result</p>
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Exhibition;
