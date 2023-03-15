import React from 'react';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './KoronaPay.module.scss';

import headerImg from '../assets/korona_mainBg.png';
import korona3d_1 from '../assets/korona3d_1.png';
import korona3d_2 from '../assets/korona3d_2.png';
import korona3d_3 from '../assets/korona3d_3.png';
import korona_stil1 from '../assets/korona_stil1.png';
import korona_stil2 from '../assets/korona_stil2.png';
import korona_stil3 from '../assets/korona_stil3.png';
import korona_scene1 from '../assets/korona_scene1.png';
import korona_scene2 from '../assets/korona_scene2.png';
import korona_scene3 from '../assets/korona_scene3.png';
import korona_scene4 from '../assets/korona_scene4.png';
import korona_scene5 from '../assets/korona_scene5.png';
import korona_scene6 from '../assets/korona_scene6.png';
import korona_scene7 from '../assets/korona_scene7.png';
import korona_ny1 from '../assets/korona_ny1.png';
import korona_ny2 from '../assets/korona_ny2.png';
import korona_banner1 from '../assets/korona_banner1.png';
import korona_banner2 from '../assets/korona_banner2.png';

// import koronaVideo from '../assets/KoronaVideo1.mp4';

const KoronaPay = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>פרסומת תלת מימדית למערכת התשלומים Korona Pay</h1>
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
        <h2 className={styles.subheader}>משימה</h2>
        <p>
          לייצר סרטון לקמפיין הפרסום החדש של המותג האירופאי . סרטון לראש השנה שישמש עד אמצע ינואר 2021 וגרסה רגילה
          לחודשים הנותרים.
          <br />
          <br />
          כדי לתמוך בסרטונים, נוצרו גם באנרים סטטיים ומונפשים בסגנון סטנדרטי של שנה חדשה.
          <br />
          <br />
          הפרויקט כולו , מהמשגה ועד מסירת הסרטון הושלם תוך חודש.
        </p>
        <div className={styles.subheader}>3D models</div>
        <div className={styles.wrapper3d}>
          <img src={korona3d_1} alt="korona3d_1" />
          <img src={korona3d_2} alt="korona3d_2" />
          <img src={korona3d_3} alt="korona3d_3" />
        </div>

        <div className={styles.subheader}>Stilshots</div>
        <p>
          עשינו שלוש איטרציות במהלך הפיתוח של גיליונות הסטילס. הקונספט של הסליל לא השתנה, אבל פלטת הצבעים של הסליל
          הושלמה ברובה סופית.
        </p>
        <div className={styles.wrapperStill}>
          <div className={styles.imgWrapper}>
            <img src={korona_stil1} alt="korona_stil1" />
            <span>First iteration</span>
          </div>
          <div className={styles.imgWrapper}>
            <img src={korona_stil2} alt="korona_stil1" />
            <span>Second iteration</span>
          </div>
          <div className={styles.imgWrapper}>
            <img src={korona_stil3} alt="korona_stil1" />
            <span>Third iteration</span>
          </div>
        </div>

        <div className={styles.subheader}>סצנות של הסרטון</div>
        <div className={styles.scenesWrapper}>
          <img src={korona_scene1} alt="korona_scene1" />
          <img src={korona_scene2} alt="korona_scene2" />
          <img src={korona_scene3} alt="korona_scene3" />
          <img src={korona_scene4} alt="korona_scene4" />
          <img src={korona_scene5} alt="korona_scene5" />
          <img src={korona_scene6} alt="korona_scene6" />
          <img src={korona_scene7} alt="korona_scene7" />
        </div>

        <div className={styles.subheader}>גרסת ראש השנה</div>
        <p>
          עבור הסרטון של גרסת החג שינינו כמה פרטים: הוספנו שלג, עצי חג המולד ומתנות, הכדור הפך לצעצוע חג המולד, והשלט
          ניהיה דומה לסוכרייה על מקל.
        </p>
        <div className={styles.nyWrapper}>
          <img src={korona_ny1} alt="korona_ny1" />
          <img src={korona_ny2} alt="korona_ny2" />
        </div>

        <div className={styles.subheader}>אנימציה</div>
        <div className={styles.videoWrapper}>
          <p>
            בשלבים האחרונים של פיתוח סגנון הווידאו, עשינו אנימטיק - גרסת טיוטה לסרטון עם קריינות. האנימטיק נותן מושג טוב
            יותר על הסצנות והדינמיקה של הסרטון מאשר לוח סיפור פשוט.
          </p>
          <div>
            <ReactPlayer
              url="https://player.vimeo.com/video/493357085?h=d3dc645eac&byline=0&portrait=0"
              // width="640"
              // height="300"
              config={{
                vimeo: {
                  playerOptions: { byline: true, controls: true, playsinline: false, iframeParams: { fullscreen: 0 } },
                },
              }}
              className={styles.video}
            />
            {/* <iframe
              className={styles.video}
              src="https://player.vimeo.com/video/493357085?h=d3dc645eac&byline=0&portrait=0"
              // width="640"
              // height="300"
              frameborder="0"
              allow="autoplay fullscreen"
              allowfullscreen
              frameborder="0"
              allow="autoplay fullscreen picture-in-picture"
              allowfullscreen></iframe> */}
          </div>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

          {/* <video width="320" height="240" controls autoPlay muted>
            <source src={koronaVideo} type="video/mp4" />
            <source src={koronaVideo} type="video/ogg" />
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

export default KoronaPay;
