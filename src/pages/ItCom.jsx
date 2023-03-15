import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './itCom.module.scss';

import headerImg from '../assets/itComBg.png';
import itCom_1 from '../assets/itCom_1.png';
import itCom_2 from '../assets/itCom_2.png';
import itCom_3 from '../assets/itCom_3.png';
import itCom_4 from '../assets/itCom_4.png';
import itCom_5 from '../assets/itCom_5.png';
// import intis_video from '../assets/Intis_video.mp4';

const ItCom = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>
            Intis <br /> זה סרטון על עבודת IT.COM
          </h1>
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
          לספר על היתרונות של רכישת דומיינים ברמה שלישית באזור it.com (שמות פורמט yourdomain.it.com) באמצעות אנימציה.
          הסרטון צריך להיות ברור, מודרני וטכנולוגי.
          <br />
          <br />
          הקהל העיקרי של החברה הוא יזמים הפועלים בשווקים גדולים: הודו, סין, אירופה. לכל מדינה ואזור יש קהל יעד שונה,
          ולכן לא ניתן ליצור אותו יחס כלפי המותג.
        </p>

        <div className={styles.subheader}>רעיון</div>
        <p>
          מבוסס על העובדה שלכל הלקוחות הפוטנציאליים יש חוסר אמון בחברה וחוסר הבנה של מה שהיא עושה. עבור כל הקהלים, יש
          בעיה נפוצה עם אמון בעת ​​רכישת שמות דומיין באתרים לא ברורים.
          <br />
          <br />
          בכניסה לשוק הבינלאומי, עסקים מתמודדים עם הצורך להעביר את האתר שלהם לדומיין *.com. אבל כל התחומים כבר עמוסים או
          יקרים מדי . לכן הדומיין *.it.com אידיאלי לכניסה לשוק הבינלאומי, כתוספת לאתר הראשי. בנוסף, לשימוש באזור תחום זה
          יש יתרונות ברורים:
        </p>

        <ul className={styles.list}>
          <li>— מגוון שמות יפים במחיר סביר </li>
          <li>— אפשרות להשתמש במיתוג עם המילה it (do.it.com, buy.it.com וכו') </li>
          <li>— אפשרות להשתמש במיתוג עם המילה </li>
        </ul>

        <div className={styles.subheader}>סגנון</div>
        <p>
          הפרסומת חייבת להיות מובנת לחלוטין לכל יזם מכל מדינה. זה יכול להיות יצרן מוצרי נייר באיטליה, בעל קונדיטוריה
          באפריקה, או סטארט-אפ צעיר מרוסיה. עבור כולם, הפעולות המתרחשות על המסך צריכות להיות ברורות באותה מידה, ולכן
          דחינו מטאפורות והפשטות רב-שכבתיות. השתמשנו בסגנון איור שטוח ואנימציית צורות.
        </p>

        <div className={styles.wrapper3d}>
          <img src={itCom_1} alt="itCom_1" />
          <img src={itCom_2} alt="itCom_2" />
          <img src={itCom_3} alt="itCom_3" />
          <img src={itCom_4} alt="itCom_4" />
          <img src={itCom_5} alt="itCom_5" />
        </div>

        <div className={styles.subheader}>תוצאה</div>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/696922670"
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

          {/* <iframe
            className={styles.video}
            src="https://player.vimeo.com/video/696922670?h=ce08b21ca1&color=ffffff&title=0&byline=0&portrait=0"
            // style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen></iframe> */}
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

          {/* <video width="320" height="240" controls>
            <source src={intis_video} type="video/mp4" />
            <source src={intis_video} type="video/ogg" />
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

export default ItCom;
