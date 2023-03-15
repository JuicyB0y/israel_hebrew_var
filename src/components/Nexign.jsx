import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './Nexign.module.scss';

import headerImg from '../assets/Nexign_mainBg.png';
import bigPic from '../assets/Nexign_bigPic.png';
import nexign_1 from '../assets/nexign_1.png';
import nexign_2 from '../assets/nexign_2.png';
import nexign_3 from '../assets/nexign_3.png';
import nexign_4 from '../assets/nexign_4.png';
import nexign_5 from '../assets/nexign_5.png';
import nexign_6 from '../assets/nexign_6.png';
import nexign_7 from '../assets/nexign_7.png';
import nexign_8 from '../assets/nexign_8.png';
import nexign_9 from '../assets/nexign_9.png';
import nexign_10 from '../assets/nexign_10.png';
import nexign_11 from '../assets/nexign_11.png';

// import Nexign_video from '../assets/Nexign_video.mp4';

const Nexign = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>סדרה של פרומואים עבור Nexign</h1>
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
        <div className={styles.taskWrapper}>
          <p>
            להכין סדרת סרטונים להשתתפותה של Nexign בפורום הבינלאומי Digital Transformation World Series 2020: 3 סרטוני
            הדגמה על מוצרי הלקוח וסרטון בן 30 שניות, שיוצג באירוע בהפסקות בין הפגישות.
            <br />
            <br />
            המשימה הייתה מסובכת בדד-ליין קצר - היו לנו רק 1.5 חודשים לייצר את הפרויקט, וזה היה הניסיון הראשון שלנו עם
            מחלקת השיווק של Nexign.
          </p>

          <aside>
            <div>
              NEXIGN <br />
              הוא ספק מוביל של מערכות תמיכה לעסקים ופלטפורמות אינטרנט עבור ספקי שירותים.
            </div>
          </aside>
        </div>

        <div className={styles.subheader}>פתרון</div>
        <p>הקונספט של הסרטון נקבע על ידי הלקוח בחוזה</p>
        <p className={styles.quote}>
          “ The synthesis of graphics and emotional stock videos where the graphics is prevailing to support the idea of
          data-driven company. ”
        </p>
        <p>
          השתמשנו בשילוב של גרפיקה מונפשת וצילומי מדה. האנימציות עזרו להמחיש את המשמעות של המוצרים של Nexign, היתרונות
          שלהם ונתונים אחרים, וקטעי וידאו הוסיפו את הרגש הנכון לסרטון.
        </p>
        <div className={styles.bigPictureWrapper}>
          <img src={bigPic} alt="bigPic" />
          <span>A shot of an infographic from a product video</span>
        </div>
        <p>
          צללנו לפרטים של העסק והבנו את המוצר - Nexign מוכר שירותי B2B מורכבים עבור מפעילי טלקום במדינות שונות. הלקוח
          נתן לנו את הטקסט של התסריט ואת הכיוון הכללי של הסגנון הוויזואלי של פרסומות. קיבלנו עבודת צוות: הלקוח הציע
          רעיונות, אותם סיימנו ויישמנו במהירות.
          <br />
          <br />
          בחרנו קריינות קולית באנגלית לקליפים, כדי שקול הסרטון יישמע הכי מתאים למשתתפי הפורום. בהתחלה עבדנו רק על
          הפרסומות למוצרים, הסרטון של 30 השניות היה עושה קבלן אחר, אבל בשלבים האחרונים של הפרויקט התברר שהוא לא מספיק
          מקצועי. כבר לא היה זמן ולא תקציב להכנת סרטון חדש מאפס, אז החלטנו לייצר את הסרטון מתוך קטעים של ההדגמה המוכנה.
          לקח לנו 5 ימים של עבודה קשה, והסרטון היה מוכן.
          <br />
          <br />
          כתוצאה מכך, פתרנו את כל המשימות שהציב הלקוח ואף יותר מבלי לחרוג מהתקציב.
          <br />
          <br />
          Nexign
          <br />
          <br />
          הוא ספק מוביל של מערכות תמיכה לעסקים ופלטפורמות אינטרנט של למפעילי תקשורת.
        </p>

        <div className={styles.subheader}>מסגרות</div>
        <div className={styles.wrapper3d}>
          <img src={nexign_1} alt="nexign_1" />
          <img src={nexign_2} alt="nexign_2" />
          <img src={nexign_3} alt="nexign_3" />
          <img src={nexign_4} alt="nexign_4" />
          <img src={nexign_5} alt="nexign_5" />
          <img src={nexign_6} alt="nexign_6" />
          <img src={nexign_7} alt="nexign_7" />
          <img src={nexign_8} alt="nexign_8" />
          <img src={nexign_9} alt="nexign_9" />
          <img src={nexign_10} alt="nexign_10" />
          <img src={nexign_11} alt="nexign_11" />
        </div>

        <div className={styles.subheader}>מסגרות</div>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/461371496"
            width="100%"
            height="100%"
            controls
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true, playsinline: false, iframeParams: { fullscreen: 0 } },
              },
            }}
            className={styles.video}
          />
          {/* <video width="320" height="240" controls>
            <source src={Nexign_video} type="video/mp4" />
            <source src={Nexign_video} type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
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

export default Nexign;
