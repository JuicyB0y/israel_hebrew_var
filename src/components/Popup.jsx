import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import closeIcon from '../assets/close.png';
import logo from '../assets/logo.png';

import styles from './PopUp.module.scss';

const Popup = ({ setOpened, opened }) => {
  const { t } = useTranslation();

  return (
    <div>
      {/* <div className={cn(styles.overlay )}> */}
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        {/* <div className={styles.overlay}> */}
        <div className={styles.drawer}>
          <div className={styles.top}>
            <img onClick={() => setOpened(false)} className={styles.top_closeIcon} src={closeIcon} alt="closeIcon" />
            <div className={styles.top_logo}>
              <img src={logo} alt="logo" />
              <NavLink to="/" onClick={() => setOpened(false)}>
                DESIGN ISRAEL
              </NavLink>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middle_top}>
              <NavLink to="/services" onClick={() => setOpened(false)} className={styles.middle_services}>
                שירותים
              </NavLink>
              <NavLink to="/cases" onClick={() => setOpened(false)} className={styles.middle_services}>
                הפרוייקטים שלנו
              </NavLink>
            </div>
            <hr />
            <div className={styles.middle_left}>
              <Link to="/animation" onClick={() => setOpened(false)}>
                אנימציה 2D
              </Link>
              <Link to="/animation" onClick={() => setOpened(false)}>
                אנימציה 3D
              </Link>
              <Link to="/3dvisualization" onClick={() => setOpened(false)}>
                3D ויזואליזציה
              </Link>
              <Link to="/logos" onClick={() => setOpened(false)}>
                עיצוב לוגו
              </Link>
              <Link to="/logos" onClick={() => setOpened(false)}>
                Corporate identity
              </Link>
              <Link to="/retouching" onClick={() => setOpened(false)}>
                ריטוש תמונות
              </Link>
              <Link to="/webdevelopment" onClick={() => setOpened(false)}>
                בניית אתרים
              </Link>
            </div>
            {/* <div className={styles.middle_center}>
              <div>{t('popup_agency')}</div>
              <div>{t('popup_career')}</div>
              <div>{t('popup_reviews')}</div>
            </div> */}
            <div className={styles.middle_right}>
              <div className={styles.middle_project}>צור קשר</div>
              <div className={styles.middle_mail}>Jerusalem@mail.ru</div>
              <div className={styles.middle_phone}>+7 (932) 213-45-63</div>
              <a href="#" className={styles.button}>
                להרשמה
              </a>
              <div className={styles.middle_cooperation}>Cooperation</div>
              <div className={styles.middle_lastmail}>Jerusalem@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
