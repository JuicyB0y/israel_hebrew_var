import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './Animation.module.scss';

import { Link } from 'react-router-dom';

import arrow from '../assets/Arrow.png';
import korona from '../assets/korona.png';
import purple from '../assets/animate_purple.png';
import girl from '../assets/girl.png';
import intis from '../assets/intis.png';

import learn from '../assets/animate_learn.png';
import internet from '../assets/animate_internet.png';
import cats from '../assets/cats.png';
import inhub from '../assets/animate_inhub.png';
import Contacts from '../components/Contacts';
import Form from '../components/Form';

import anim_1 from '../assets/animate_1.png';
import anim_2 from '../assets/animate_2.png';
import anim_3 from '../assets/animate_3.png';
import anim_4 from '../assets/animate_4.png';
import left from '../assets/left-arrow_v1.png';
import left2 from '../assets/left-bold.png';

import insta from '../assets/instagram-svgrepo-com.svg';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg';
import telegram from '../assets/telegram-plane-svgrepo-com.svg';

const Animation = () => {
  const { t } = useTranslation();

  const detailedList = [
    {
      count: ' .1',
      info: 'הסבירו בצורה פשוטה וברורה',
      text: 'אתם שולחים לנו חומרים על הפרויקט (תכניות קומה , תוכניות חזית וגינון). אנו עובדים ומגבשים הצעת מחיר מסחרית .',
    },
    {
      count: ' .2',
      info: 'להחליף צילומים יקרים',
      text: 'לפי העלילה בסרטון, רקטה אמורה להמריא או שהפעולה מתרחשתעל אי בודד? עבור צילום וידאו כזה, תצטרך להשתמש ב-chroma key וסטודיו יקר או לקנות כרטיסי טיסה כדי להגיע למקום המתאים לזה. אבל אתה יכול לצייר כל מה שאתה רוצה גם אי וגם רקטה.',
    },
    {
      count: ' .3',
      info: 'להיראות מודרני',
      text: 'מעטות החברות שמנצלות את כל האפשרויות של סרטוני אנימציה. אבל מי שמצליח, עושה פרויקטים ממש מגניבים ובולט מהמתחרים.',
    },
  ];

  const TopImages = [
    { url: korona, name: '/animation/koronapay' },
    { url: purple, name: '/animation/linq' },
    { url: girl, name: '/animation/smschain' },
    { url: intis, name: '/animation/itvideo' },
  ];
  const BottomImages = [
    { url: learn, name: '/animation/itcom' },
    { url: internet, name: '/animation/nexign' },
    { url: cats, name: '/animation/startup' },
    { url: inhub, name: '/animation/nhub' },
  ];
  const notesArr = [];

  const animateTypes = [
    {
      picture: anim_1,
      header: 'הסבר על המוצר',
      text: 'סרטון שמספר על עקרונות המוצר או השירות ב 1-1.5 דקות',
    },
    {
      picture: anim_2,
      header: 'pre-roll פרסום',
      text: 'סרטון קצר עם קריאה לפעולה, המשמש בקמפיינים פרסומיים.',
    },
    { picture: anim_3, header: 'סרטון ותמונה', text: 'כל סיפור של המותג אפשר לספר בצורה מעניינת באמצעות אנימציה.' },
    {
      picture: anim_4,
      header: 'תסריט חינוכי',
      text: 'אנימציה חזותית של ממשקי אתרים ואפליקציות לחינוך הצופה.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>אנימציה</h1>
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
          {/* <div className={styles.dots_long}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div>
          <div className={styles.dots_short}></div> */}
        </div>
      </div>
      <hr />
      <section className={styles.info}>
        <article className={styles.info_left}>
          <h4>אנו פותרים בעיות עסקיות יצירתיות באמצעות אנימציה</h4>
          <p>אנו נספר בפשטות ובבירור על המוצר שלך באמצעות אנימציה, ניצור תמונות ויזואליות שייזכרו על ידי הצופה.</p>
        </article>
        <aside className={styles.info_right}>
          <div>
            <a href="#"> תשאיר את הבקשה שלך</a>
            <img src={left2} alt="arrow" />
          </div>
          <p>יעוץ חינם ונראה לך היכן להתחיל</p>
        </aside>
      </section>
      {/* <article className={styles.article}>{secondText}</article> */}
      <section className={styles.works}>
        <h2>סרטוני אנימציה עוזרים לספר דברים קשים בצורה פשוטה</h2>

        {/* подробный stagesList*/}
        {detailedList.length > 0 && (
          <>
            <ol className={styles.detailList}>
              {detailedList.map((item) => (
                <li className={styles.detailList_item}>
                  <div>
                    <span> {item.info} </span> {item.count}
                  </div>
                  {item.image !== undefined && <img src={item.image} className={styles.icons3d} alt="icon" />}
                  <hr />
                  <article>{item.text}</article>
                </li>
              ))}
            </ol>
          </>
        )}

        <h2>4 סוגים עיקריים של סרטוני אנימציה</h2>
        <h3 className={styles.extraHeader}>
          אנו מדגישים מספר פורמטים טיפוסיים לשימוש באנימציה דו-ממדית ותלת-ממדית, ניתן להשתמש בהם גם במצבים אחרים.
        </h3>
        <div className={styles.typesWrapper}>
          {animateTypes.map((item, i) => (
            <div key={i} className={styles.types}>
              <img src={item.picture} alt="picture" />
              <div className={styles.typesInside}>
                <h5>{item.header}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.workSubtitle}>לדוגמא</h3>
        {/* а это динамическая карусель */}
        {TopImages.length > 0 && BottomImages.length > 0 && (
          <div className={styles.carouselBigWrapper}>
            <div className={styles.works_smallWrapper}>
              <div className={`${styles.works_carousel} ${styles.animate}`}>
                {/* we need to make them twice for correct animation */}

                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_topCarousel}>
                  {TopImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* нижняя карусель */}
            <div className={styles.works_smallWrapper}>
              <div className={cn(styles.works_carousel, styles.animateRight)}>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case1}>Case</p>
                    </Link>
                  ))}
                </div>
                <div className={styles.works_bottomCarousel}>
                  {BottomImages?.map((item) => (
                    <Link className={styles.works_card} to={`${item.name}`}>
                      <img className={styles.works_card_img} src={item.url} alt="card" />
                      <p className={styles.works_card_case1}>Case</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <div className={styles.form}>
        <Form />
        <Contacts />
      </div>
    </div>
  );
};

export default Animation;
