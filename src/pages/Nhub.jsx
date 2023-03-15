import React from 'react';
import ReactPlayer from 'react-player';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Nhub.module.scss';

// import Nhub_video from '../assets/Nhub_video.mp4';
import headerImg from '../assets/Nhub_main.png';

const Nhub = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>סרטון של פלטפורמת I NHUB |</h1>
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://player.vimeo.com/video/709527824?h=c067bdd056"
            width="100%"
            height="100%"
            config={{
              vimeo: {
                playerOptions: { byline: true, controls: true, playsinline: false, iframeParams: { fullscreen: 0 } },
              },
            }}
            className={styles.video}
          />

          {/* <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/709527824?h=c067bdd056"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen></iframe> */}
          {/* <video width="320" height="240" controls>
            <source src={Nhub_video} type="video/mp4" />
            <source src={Nhub_video} type="video/ogg" />
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

export default Nhub;
