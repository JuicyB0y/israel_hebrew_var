import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';

import Form from '../components/Form';
import Contacts from '../components/Contacts';

import styles from './SmsChain.module.scss';

import headerImg from '../assets/Sms_mainBg.png';
import sms_1 from '../assets/sms_1.png';
import sms_2 from '../assets/sms_2.png';
import sms_3 from '../assets/sms_3.png';
import sms_4 from '../assets/sms_4.png';
import sms_5 from '../assets/sms_5.png';
import sms_6 from '../assets/sms_6.png';
import sms_7 from '../assets/sms_7.png';
// import Sms_video from '../assets/Sms_video.mp4';

const SmsChain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>SMS Chain אנימציית המוצר</h1>
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
        <p>לפתח אנימציית מוצר עבור פרויקט ICO SMS Chain.</p>

        <div className={styles.subheader}>איורים</div>
        <div className={styles.wrapper3d}>
          <img src={sms_1} alt="sms_1" />
          <img src={sms_2} alt="sms_2" />
          <img src={sms_3} alt="sms_3" />
          <img src={sms_4} alt="sms_4" />
          <img src={sms_5} alt="sms_5" />
          <img src={sms_6} alt="sms_6" />
          <img src={sms_7} alt="sms_7" />
        </div>

        <div className={styles.subheader}>תוצאה</div>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://vimeo.com/239242832"
            width="100%"
            height="100%"
            // controls
            // config={{ vimeo: { playerOptions: { background: true } } }}
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true, playsinline: false, iframeParams: { fullscreen: 0 } },
              },
            }}
            className={styles.video}
          />

          {/* <video width="320" height="240" controls>
            <source src={Sms_video} type="video/mp4" />
            <source src={Sms_video} type="video/ogg" />
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

export default SmsChain;
