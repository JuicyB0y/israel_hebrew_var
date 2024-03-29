import React from 'react';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Murmansk.module.scss';
import mainBg from '../assets/Murmansk_bg.png';
import murm_text1 from '../assets/Murmansk_text1.png';
import murm_text2 from '../assets/Murmansk_text2.png';
import murm_left1 from '../assets/Murmansk_left1.png';
import murm_left2 from '../assets/Murmansk_left2.png';
import murm_left3 from '../assets/Murmansk_left3.png';
import murm_left4 from '../assets/Murmansk_left4.png';
import murm_right1 from '../assets/Murmansk_right1.png';
import murm_right2 from '../assets/Murmansk_right2.png';
import murm_right3 from '../assets/Murmansk_right3.png';
import murm_right4 from '../assets/Murmansk_right4.png';
import murm_right5 from '../assets/Murmansk_right5.png';
import bottomImg from '../assets/Murmansk_bottom.png';

const Murmansk = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
          <h1>אתר של חברת ‘’MURMANSK’’</h1>
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
        <h2>משימה</h2>
        <article>המשימה היא לפתח לוגו, סגנון ואתר אינטרנט של חברה העוסקת במטענים אוויריים והובלת נוסעים.</article>
        <h3>רעיון</h3>
        <article>
          שמה של עיר הולדתה של החברה, מורמנסק, נלקח בתור הלוגו ונוסף איור של מסוק.
          <br /> <br />
          <b>KANIT</b>
          <br />
          זוהי מערכת בשורה הראשונה, בולטת היטב בחלל ומושכת תשומת לב בשל קו המתאר המעובה.
          <br /> <br />
          <img className={styles.imgText} src={murm_text1} alt="text_example" />
          <br /> <br />
          <strong>Kdam Thmor </strong> <br /> הגופן של הכותרת של השורה השנייה, המודגש ביחס לבירה, בעל קו מתאר דק וקפדני.
          <br /> <br />
          <img className={styles.imgText} src={murm_text2} alt="text_example" />
        </article>
        <h3>סגנון</h3>
        <article>
          האתר עשוי בגוונים ניטרליים, בשילוב עם צבע אלומיניום תעופתי.
          <br /> <br />
          נעשה שימוש רב בתמונות צבעוניות של מטוסים.
        </article>

        <div className={styles.images}>
          <div className={styles.images_left}>
            <div className={styles.leftTop}>
              <div>
                <img src={murm_left1} alt="siteImage1" />
              </div>
              <div>
                <img src={murm_left2} alt="siteImage2" />
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div>
                <img src={murm_left3} alt="siteImage3" />
              </div>
              <div>
                <img src={murm_left4} alt="siteImage4" />
              </div>
            </div>
          </div>
          <div className={styles.images_right}>
            <img src={murm_right1} alt="valk_side1" />
            <img src={murm_right2} alt="valk_side2" />
            <img src={murm_right3} alt="valk_side3" />
            <img src={murm_right4} alt="valk_side4" />
            <img src={murm_right5} alt="valk_side5" />
          </div>
        </div>

        <h3>תוצאה</h3>

        <img className={styles.bottomImage} src={bottomImg} alt="bottomImg" />
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Murmansk;
