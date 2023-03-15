import React from 'react';
import { useTranslation } from 'react-i18next';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Valkirye.module.scss';
import mainBg from '../assets/valk_topBg.png';
import valk1 from '../assets/valk_1.png';
import valk2 from '../assets/valk_2.png';
import valk3 from '../assets/valk_3.png';
import valk4 from '../assets/valk_4.png';
import valk_side1 from '../assets/valk_side1.png';
import valk_side2 from '../assets/valk_side2.png';
import valk_side3 from '../assets/valk_side3.png';
import bottomImg from '../assets/valk_bottom.png';
import valk_text1 from '../assets/valk_text1.png';
import valk_text2 from '../assets/valk_text2.png';

const Valkirye = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={mainBg} alt="bgImage" /* className={styles.image} */ />
          <h1>אתר לחברת "וולקירי".</h1>
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
        <article>
          המשימה הייתה ליצור עיצוב אתר פשוט אך מובן ויזואלית עבור חברה המפתחת ביגוד לטמפרטורות נמוכות במיוחד, גם ביגוד
          לציידים ועובדי שירותים מיוחדים.
        </article>
        <h3>רעיון</h3>
        <article>
          מכיוון שרוב רוכשי המוצרים הם ציידים וקציני אכיפת החוק, צללית של ולקיריה (עלמה לוחמת) שימשה כרעיון המרכזי של
          הלוגו.
          <br /> <br />
          גופנים הם חלק חשוב מהזהות הארגונית. הם תומכים בסגנון הכללי, עוזרים לעיצוב להיות מוכר גם כאשר אין מספיק מקום
          עבורו.
          <br /> <br />
          <span>RALEWAY </span> RALEWAY היא מערכת שנקבעה בשוגג (כותרות בשורה ראשונה), מודרנית, קלה לקריאה ואינה מסבכת את
          העיצוב הויזואלי.
          <br /> <br />
          <img className={styles.imgText} src={valk_text1} alt="text_example" />
          <br /> <br />
          <strong> הגופן של הכותרת ברמה השנייה משלים היטב את הגופן הראשי.</strong>
          <br /> <br />
          <img className={styles.imgText} src={valk_text2} alt="text_example" />
        </article>
        <h3>סגנון</h3>
        <article>
          אילוסטרציה
          <br /> <br />
          היציבות והביטחון של ה-VALKYRIE מוצגים באיורים. הם סטטיים ורגועים. האיורים הביאו לעיצוב סיפור על כפור עז, קידום
          ומילוי משימות.
          <br /> <br />
          ערכת הצבעים הארגונית גם כמו שם המותג , היא מרכיב ייחודי המאפשר לזהות את החברה מול מתחרים
        </article>

        <div className={styles.images}>
          <div className={styles.images_left}>
            <div className={styles.leftTop}>
              <div>
                <img src={valk1} alt="siteImage1" />
              </div>
              <div>
                <img src={valk2} alt="siteImage2" />
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div>
                <img src={valk3} alt="siteImage3" />
              </div>
              <div>
                <img src={valk4} alt="siteImage4" />
              </div>
            </div>
          </div>
          <div className={styles.images_right}>
            <img src={valk_side1} alt="valk_side1" />
            <img src={valk_side2} alt="valk_side2" />
            <img src={valk_side3} alt="valk_side3" />
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

export default Valkirye;
