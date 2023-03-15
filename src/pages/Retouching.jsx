import React from 'react';
import ServicePage from '../components/ServicePage';
import { useTranslation } from 'react-i18next';

import styles from './Retouching.module.scss';

import dtop1 from '../assets//3dtop1.png';
import dtop2 from '../assets/3dtop2.png';
import dtop3 from '../assets/3dtop3.png';
import dbot1 from '../assets/3dbot1.png';
import dbot2 from '../assets/3dbot2.png';

import vis1 from '../assets//3d_1.png';
import vis3 from '../assets//3d_3.png';
import vis4 from '../assets//3d_4.png';
import vis5 from '../assets//3d_5.png';
import tree from '../assets/3d_2.png';

import arrow from '../assets/Arrow.png';

import house from '../assets/house.png';
import woman1 from '../assets/bl_woman_1.png';
import woman2 from '../assets/bl_woman_2.png';
import ring1 from '../assets/ring_1.png';
import ring2 from '../assets/ring_2.png';
import parf1 from '../assets/t_ford1.png';
import parf2 from '../assets/t_ford2.png';
import pen1 from '../assets/pen_eye_1.png';
import pen2 from '../assets/pen_eye_2.png';
import left2 from '../assets/left-bold.png';

import ph_emoji from '../assets/photo_emoji.png';
import ph_flash from '../assets/photo_flash.png';

import insta from '../assets/instagram-svgrepo-com.svg';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg';
import telegram from '../assets/telegram-plane-svgrepo-com.svg';

import Form from '../components/Form';
import Contacts from '../components/Contacts';
import { Link } from 'react-router-dom';

const Retouching = () => {
  const { t } = useTranslation();

  const OnlyImages = [woman1, woman2, ring1, ring2, parf1, parf2, pen1, pen2];

  const notesArr = [
    {
      name: 'ריטוש דיוקן',
      text: 'טיפול בצילומי פורטרט להסרת פגמים קיימים בתמונה ריטוש זה כולל',
      list: [
        ' תיקון צבע *',
        ' פלסטי *',
        ' הסרת אקנה, חבורות ופגמים נוספים בתמונה *',
        ' ניקוי רקע, גזירה במידת הצורך *',
        ' החלקת עור *',
      ],
    },
    {
      name: 'ריטוש לחנויות אונליין וקטלוגים',
      text: 'עיבוד תפעולי וריטוש של כל כמות תמונות לקטלוג החנות המקוונת',
      list: [
        'תיקון צבע *',
        'ניקוי רקע, גזירה *',
        'הסרת אקנה, חבורות ופגמים נוספים בתמונה *',
        'הסרת פגמים במוצר *',
        'החלקת עור יסודית *',
        'עבודה עם צללים *',
        'שינויים אסטתיים *',
      ],
    },

    {
      name: 'ריטוש תמונות תכשיטים',
      text: 'פיתוח ריטוש תקני בהתאמה אישית לדרישותיכם וריטוש צילומי תכשיטים עם הכנה להדפסת קטלוג וחנות מקוונת',
      list: [
        'תיקון צבע *',
        'הסרת סנוור והשתקפויות נוספות *',
        'גזירת רקע *',
        'יישור עומק וניגודיות של השתקפויות, צללים והארות *',
        'ניקוי גוונים לא רצויים על מתכות ואבנים *',
        'הגדרת זווית הטיה ומיקום במסגרת *',
        'ציור חיתוך אבנים והדגשות עליהם *',
        'ציור צללית בפורמט יחיד *',
      ],
    },

    {
      name: 'חבילת עריכת תמונות',
      text: ':הבאת סדרת תמונות לסטנדרט אחד. כולל',
      list: [
        ' איזון לבן *',
        'HSL *',
        'תיקון אור ועיוות *',
        'סטיות כרומטיות *',
        'ניגודיות *',
        'חיתוך תמונה *',
        'רוויה *',
        'מברשות *',
      ],
    },
  ];

  const headerText = t('retouche_header');
  const sectionTitle = t('retouche_subheader');
  const firstText = t('retouche_firstText');

  // return (
  //   <div>
  //     <ServicePage
  //       headerText={headerText}
  //       sectionTitle={sectionTitle}
  //       firstText={firstText}
  //       notesArr={notesArr}
  //       OnlyImages={OnlyImages}
  //     />
  //   </div>
  // );
  return (
    <div className={styles.wrapper}>
      <img className={styles.ph_emoji} src={ph_emoji} alt="ph_emoji" />
      <img className={styles.ph_flash} src={ph_flash} alt="ph_flash" />

      <h1 className={styles.title} data-heading="ריטוש תמונות">
        ריטוש תמונות
      </h1>
      <div className={styles.service}>
        <span>{t('servPage_service')}</span>
        <div className={styles.dots_wrapper}>
          <Link to="#">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
          <Link to="#">
            <img src={insta} alt="whatsapp" />
          </Link>
          <Link to="#">
            <img src={telegram} alt="whatsapp" />
          </Link>
        </div>
      </div>
      <hr />
      <section className={styles.info}>
        <article className={styles.info_left}>
          <h4>?למה יש צורך בריטוש תמונות</h4>
          <p>
            ריטוש תמונה מאפשר להסיר פגמים שונים הנראים בתמונה ולהפוך את התמונה לעמוקה, עשירה ויפה יותר. לרוב, ריטוש משמש
            בצילומי פורטרט - לפורטרטים בתקריב, צילומי אובייקטים לקטלוגים , פרסומות וכן בכל צילום פרסומי אחר. ללא קשר
            לאיכות חומר המקור (ואיכות הארגון וההתנהלות של הצילום), ריטוש תמונות הוא שלב חובה בייצור מוצרי צילום.
          </p>
        </article>
        <aside className={styles.info_right}>
          <div>
            <a href="#">תשאיר את הבקשה שלך</a>
            <img src={left2} alt="arrow" />
          </div>
          <p>{t('servPage_arrText')}</p>
        </aside>
      </section>
      <section className={styles.cards}>
        {notesArr.map((item) => (
          <div key={item.name} className={styles.card}>
            <span className={styles.card_name}>{item.name}</span>
            {item.image !== undefined && <img className={styles.web_icon} src={item?.image} alt="icon" />}
            <hr />
            <article className={styles.card_text}>{item.text}</article>
            {item.list && (
              <ul className={styles.card_list} /* style={{ marginTop: '20px' }} */>
                {item.list?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      {/* <article className={styles.article}>{secondText}</article> */}
      <section className={styles.works} /* className={styles.works} */>
        {/* подробный stagesList*/}
        {/* {detailedList.length > 0 && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_stages')}</h3>
            <ol className={styles.detailList}>
              {detailedList.map((item) => (
                <li className={styles.detailList_item}>
                  <span>{item.count}</span> {item.info}
                  {item.image !== undefined && <img src={item.image} className={styles.icons3d} alt="icon" />}
                  <hr />
                  <article>{item.text}</article>
                </li>
              ))}
            </ol>
          </>
        )} */}

        {/* это статичные фотки */}
        <div className={styles.works_miniWrapper}>
          <h3 className={styles.works_subtitleStatic}>לדוגמא</h3>
        </div>
        <div className={styles.works_onlyCarousel}>
          <img src={woman1} alt="image" />
          <img src={woman2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel}>
          <img src={ring1} alt="image" />
          <img src={ring2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel}>
          <img className={styles.onlyImage} src={house} alt="image" />
        </div>
        <div className={styles.works_onlyCarouselParfume}>
          <img src={parf1} alt="image" />
          <img src={parf2} alt="image" />
        </div>
        <div className={styles.works_onlyCarousel} style={{ marginBottom: '0' }}>
          <img src={pen1} alt="image" />
          <img src={pen2} alt="image" />
        </div>

        {/* {stagesList.length > 0 && (
          <>
            <h3 className={styles.works_subtitle}>{t('servPage_stages')}</h3>
            <ol className={styles.list}>
              {stagesList.map((item) => (
                <li className={styles.list_item}>
                  <span>{item.count}</span> {item.info}
                </li>
              ))}
            </ol>
          </>
        )} */}
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Retouching;
