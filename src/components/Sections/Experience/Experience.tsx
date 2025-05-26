import React from "react";
// Component
import Image from "../../Common/Image";
import styles from './Experience.module.scss';
import expImage from '../../../assets/images/home/experience.png';

const ExperienceSection: React.FC = () => (
  <section className={styles.experience}>
    <div className={styles.experience__details}>
      <header className={styles.experience__header}>
        <h2 className={styles.experience__title}>Experience<br />Fresh Ingredients</h2>
      </header>
      <div className={styles.experience__menus}>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__name}>Classic Margherita Pizza</h3>
          <div className={styles.experience__description}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__name}>Classic Margherita Pizza</h3>
          <div className={styles.experience__description}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__name}>Classic Margherita Pizza</h3>
          <div className={styles.experience__description}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
        <div className="lineHorizontal"></div>
        <div className={styles.experience__menu}>
          <h3 className={styles.experience__name}>Classic Margherita Pizza</h3>
          <div className={styles.experience__description}>
            <p className={styles.experience__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.experience__price}>$14</span>
          </div>
        </div>
      </div>
    </div>
    {/* Image */}
    <Image
      className={styles.experience__imgContainer}
      src={expImage}
      alt='Experience Image'
    />
  </section>
);

export default ExperienceSection;