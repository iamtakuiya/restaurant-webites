import React from 'react';

// Component
import Button from '../../components/Common/Button';
import { MenuCard } from '../../components/Sections/Menu';
import Image from '../../components/Common/Image';

// Sections
import HeroSection from '../../components/Sections/Hero';
import ExperienceSection from '../../components/Sections/Experience/Experience';
import GallerySection from '../../components/Sections/Gallery';
// Data
import { homeMenuItems } from '../../components/Sections/Menu/data/menuitems';
import styles from './HomePage.module.scss';

import aboutusImageLeft from '../../assets/images/home/about-us-left.png';
import aboutusImageRight from '../../assets/images/home/about-us-right.png';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Homepage */}
      <div className={styles.homepage}>
        {/* Hero Section */}
        <HeroSection />
        {/* Top Menu */}
        <MenuCard menuItems={homeMenuItems} />
        {/* Experience Section */}
        <ExperienceSection />
        {/* Explore Gallery Section */}
        <GallerySection />
        {/* About Us */}
        <AboutUsSection />
        {/* Event Section */}
        <Event />
      </div>
    </>
  );
};

const AboutUsSection: React.FC = () => (
  <section className={styles.aboutus}>
    <header className={styles.aboutus__header}>
      <h2 className={styles.aboutus__title}>About us</h2>
    </header>
    <div className={styles.aboutus__content}>
      <Image
        className={styles.aboutus__imgContainer}
        src={aboutusImageLeft}
        alt='explore Image'
      />
      <div className={styles.aboutus__card}>
        <div className={styles.aboutus__details}>
          <div className={styles.aboutus__description}>
            <p className={styles.aboutus__kicker}>Special features</p>
            <h3 className={styles.aboutus__heading}>Traditional<br />& Modern</h3>
            <p className={styles.aboutus__text}>They offer a mix of pasta, sandwiches, and salads, catering to different preferences.</p>
          </div>
          <div className="btnContainer">
            <Button variant='primary' cta='See more' />
          </div>
        </div>
      </div>
      <Image
        className={styles.aboutus__imgContainer}
        src={aboutusImageRight}
        alt='explore Image'
      />
    </div>
  </section>
);

const Event: React.FC = () => (
  <section className={styles.event}>
    <div className="overlay--dark"></div>
    <div className={styles.event__content}>
      <div className={styles.event__description}>
        <h2 className={styles.event__title}>Catering & Events<br />Authentic Italian Feasts</h2>
        <p className={styles.event__text}>Create a sophisticated and memorable event with our authentic Italian catering. We offer customized menus featuring handcrafted pasta, flavorful sauces, and exquisite desserts, ensuring a dining experience.</p>
      </div>
      <div className="btnContainer">
        <Button variant='primary' cta="Let's Plan" />
      </div>
    </div>
  </section>
);

export default HomePage;
