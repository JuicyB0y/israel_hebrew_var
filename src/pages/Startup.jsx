import React from 'react';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Startup.module.scss';

import headerImg from '../assets/Startup_bg.png';
import startup_0 from '../assets/startup_0.png';
import startup_1 from '../assets/startup_1.png';
import startup_2 from '../assets/startup_2.png';
import startup_3 from '../assets/startup_3.png';
import startup_4 from '../assets/startup_4.png';
import startup_5 from '../assets/startup_5.png';
// import BitSugar_video from '../assets/BitSugar_video.mp4';

const Startup = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>פרה-רול אנימציה עבור סטארט-אפ של מטבעות קריפטוגרפיים</h1>
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
        <div className={styles.subheader}>משימה</div>
        <p>
          לייצר סרטון אנימציה לפרסום השירות העיקרי של החברה - הלוואות בכסף אמיתי כנגד מטבעות קריפטו באינטרנט. הלקוח ביקש
          לפתח קונספט קל להבנה ולהסביר בפשטות איך זה עובד.
        </p>

        <div className={styles.subheader}>פתרון</div>
        <p>
          הסיפור מבוסס על סיטואציה קומית שבה הגזימו בבעיית המחסור בכספים מחוסלים , והחליטו להשתמש בדמויות של חתולים
          מצוירים במקום אנשים אמיתיים - זה עזר למשוך את תשומת הלב של הצופה והוסיף הומור.
        </p>

        <div className={styles.subheader}>איורים</div>
        <div className={styles.wrapper3d}>
          <img src={startup_0} alt="startup_0" />
          <img src={startup_1} alt="startup_1" />
          <img src={startup_2} alt="startup_2" />
          <img src={startup_3} alt="startup_3" />
          <img src={startup_4} alt="startup_4" />
          <img src={startup_5} alt="startup_5" />
        </div>

        <div className={styles.subheader}>תוצאה</div>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/282304621"
            width="100%"
            height="100%"
            // controls
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true, playsinline: false, iframeParams: { fullscreen: 0 } },
              },
            }}
            className={styles.video}
          />
          {/* <video width="320" height="240" controls>
            <source src={BitSugar_video} type="video/mp4" />
            <source src={BitSugar_video} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Startup;
