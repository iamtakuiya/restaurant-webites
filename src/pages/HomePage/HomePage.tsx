import React from 'react';

// Component
import Header from '../../components/Header';
import Button from '../../components/Button';
import MenuCard from '../../components/Menu';
import Image from '../../components/Image';

import styles from './HomePage.module.scss';
import { homeMenuItems } from '../../components/Menu/data/menuitems';

import expImage from '../../assets/images/home/experience.png';

const HomePage: React.FC = () => {
  return (
    <>
    {/* Header */}
    <Header />
    {/* Main */}
    <main className={styles.homepage}>
      {/* Hero Section */}
      <HeroSection />
      {/* Top Menu */}
      <MenuCard menuItems={homeMenuItems} />
      {/* Experience Section */}
      <ExperienceSection />
      {/* Explore Gallery Section */}
      {/* About Us */}
      {/* Event Section */}
    </main>
    {/* Footer */}
    <footer className={styles.footer}>
      <p>Copyright&copy; Taku.code Alright reserved</p>
    </footer>
    </>
  );
};

// Hero section
const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.overlay}></div>
    <div className={styles.hero__heroContent}>
      <div className={styles.hero__textContainer}>
        <h1 className={styles.hero__heading}>Welcome to LaidBack Eats<br />Your Dining Escape</h1>
        <p className={styles.hero__text}>Indulge in a delightful culinary experience where comfort meets flavor. Join us for a meal that feels like home.</p>
      </div>
      <div className="btnContainer">
        <Button variant='primary' cta='View Menu' />
        <Button variant='secondary' cta='Order Online' />
      </div>
    </div>
  </section>
);

const ExperienceSection: React.FC = () => (
  <section className={styles.experience}>
    <div className={styles.experience__details}>
      <div className={styles.experience__headings}>
        <h2 className={styles.experience__heading}>Experience Fresh Ingredients</h2>
      </div>
      <div className={styles.experience__menus}>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__title}>Classic Margherita Pizza</h3>
          <div className={styles.experience__text}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__title}>Classic Margherita Pizza</h3>
          <div className={styles.experience__text}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__title}>Classic Margherita Pizza</h3>
          <div className={styles.experience__text}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className={styles.lineHorizontal}></div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__title}>Classic Margherita Pizza</h3>
          <div className={styles.experience__text}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
      </div>
    </div>
    {/* Image */}
    <div className={styles.experience__imgContainer}>
      <Image
        className={styles.experience__imgContainer}
        src={expImage}
        alt='Experience Image'
      />
    </div>
  </section>
);

export default HomePage;