import React from 'react';

// Components
import Image from '../../components/Common/Image';
// style
import styles from './AboutUsPage.module.scss';
// Image
import AboutUsImageTop from '../../assets/images/aboutUs/aboutus-top.png';
import AboutUsImageBottom from '../../assets/images/aboutUs/aboutus-bttom.png';
import AboutUsImage1 from '../../assets/images/aboutUs/image-1.png';
import AboutUsImage2 from '../../assets/images/aboutUs/image-2.png';
import AboutUsImage3 from '../../assets/images/aboutUs/image-3.png';


const AboutUs: React.FC = () => {
  return (
    <>
    <section className={styles.aboutUs}>
      <div className={styles.banner}>
        <h1 className={styles.banner__heading} aria-label='About Us'>About US</h1>
        <Image 
          className={styles.banner__img}
          src={AboutUsImageTop} 
          alt="About us image" 
        />
      </div>
      {/* Story sections */}
      <article className={styles.aboutUs__story}>
        <figure className={styles.aboutUs__content}>
          <div className={styles.aboutUs__description}>
            <p className={styles.aboutUs__kicker}>Our Roots</p>
            <h3 className={styles.aboutUs__heading}>Our Story</h3>
            {/* Separator */}
            <div className="separator"></div>
            <p className={styles.aboutUs__text}>We blossomed from a simple desire: sharing the authentic tastes of our home. Founded in 2025 by our family, our love for fresh juicy meets guides everything. We strive to bring you a genuine taste of our roots.</p>
          </div>
          <Image 
            className={styles.aboutUs__img}
            src={AboutUsImage1} 
            alt="Our Story" 
          />
        </figure>
        <figure className={styles.aboutUs__content}>
          <div className={styles.aboutUs__description}>
            <p className={styles.aboutUs__kicker}>Our Roots</p>
            <h3 className={styles.aboutUs__heading}>Our Story</h3>
            {/* Separator */}
            <div className="separator"></div>
            <p className={styles.aboutUs__text}>We blossomed from a simple desire: sharing the authentic tastes of our home. Founded in 2025 by our family, our love for fresh juicy meets guides everything. We strive to bring you a genuine taste of our roots.</p>
          </div>
          <Image 
            className={styles.aboutUs__img}
            src={AboutUsImage1} 
            alt="Our Story" 
          />
        </figure>
      </article>
      <div className={styles.banner}>
        <Image 
          className={styles.banner__img}
          src={AboutUsImageBottom} 
          alt="About us image" 
        />
      </div>
    </section>
    </>
  )
};

export default AboutUs;