import React from 'react';
import ReactPlayer from 'react-player';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

import styles from './Itvideo.module.scss';

import headerImg from '../assets/ItVideo_main.png';

// import ItVid from '../assets/Itvideo_video.mp4';

const Itvideo = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.topSection}>
        <div className={styles.image}>
          <img src={headerImg} alt="bgImage" /* className={styles.image} */ />
          <h1>Festival Beach שומר מסך ממומן לאירוע</h1>
        </div>
      </section>
      <section className={styles.description}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://player.vimeo.com/video/722539318?h=f335fa161c"
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
            src="https://player.vimeo.com/video/722539318?h=f335fa161c"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay fullscreen picture-in-picture"
            allowfullscreen></iframe> */}
          {/* <video width="320" height="240" controls>
            <source src={ItVid} type="video/mp4" />
            <source src={ItVid} type="video/ogg" />
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

export default Itvideo;
