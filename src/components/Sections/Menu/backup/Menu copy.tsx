import React from 'react';

// Styles
import styles from './styles.module.scss';

// Sub components
import Avatar from '../../../Common/Image/Image';

// Images
import topMenu1 from '../assets/images/home/top-menu-1.png';
// import avatar from '../assets/images/home/avatar.png';
import logoWebflow from '../assets/images/home/logo-webflow.png';

// Fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface MenuCardProps {
  variant?: 'normal' | 'full-width';
}

const MenuCard: React.FC<MenuCardProps> = ({ variant }) => {
  return (
    <section className={styles.topMenu}>
      <div className={styles.topMenu__headings}>
          <p className={styles.kicker}>Trending</p>
          <h2 className={styles.topMenu__heading}>Top Menu</h2>
          <p className={styles.topMenu__subheading}>You'll <span className={styles.topMenu__icon}><FontAwesomeIcon icon={faHeart} /></span> these</p>
      </div>
      <div className={styles.topMenuContainer}>
        <article className={styles.topMenu__card}>
          <div className={styles.topMenu__content}>
            <figure className={styles.topMenu__imgContainer}>
              <img 
                src={topMenu1}
                alt="Classic Margherita Pizza" 
              />
            </figure>
            <div className={styles.topMenu__details}>
              <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
              <div className={styles.topMenu__text}>
                <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
                <span className={styles.topMenu__price}>$14</span>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.topMenu__card}>
          <div className={styles.topMenu__content}>
            <figure className={styles.topMenu__imgContainer}>
              <img 
                src={topMenu1}
                alt="Classic Margherita Pizza" 
              />
            </figure>
            <div className={styles.topMenu__details}>
              <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
              <div className={styles.topMenu__text}>
                <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
                <span className={styles.topMenu__price}>$14</span>
              </div>
            </div>
          </div>
        </article>
        {/* Full card */}
        <article className={`${styles.topMenu__card} ${styles.topMenu__cardFull}`}>
          <div className={styles.topMenu__content}>
            <figure className={styles.topMenu__imgContainer}>
              <img 
                src={topMenu1}
                alt="Classic Margherita Pizza" 
              />
            </figure>
            <div className={`${styles.topMenu__details} ${styles.topMenu__detailsFull}`}>
              {/* Content Left */}
              <div className={styles.topMenu__detailLeft}>
                <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
                <div className={styles.topMenu__text}>
                  <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
                  <span className={styles.topMenu__price}>$14</span>
                </div>
              </div>
              {/* Content Right */}
              <div className={styles.topMenu__detailRight}>
                <div className={styles.review}>
                  <div className={styles.rating}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <blockquote className={styles.review__blockquote}>
                    <p className={styles.review__quote}>"A perfect spot for casual dining with friends!"</p>
                    <div className={styles.review__reviewer}>
                      <div className={styles.review__reviewerContainer}>
                        <figure className={styles.review__avatar}>
                          <img 
                            src={avatar}
                            alt="Mark Thompson" 
                          />
                        </figure>
                        <div className={styles.review__reviewerInfo}>
                          <p>Mark Thompson</p>
                          <span>Event Planner</span>
                        </div>
                      </div>
                      <div className={styles.lineVertical}></div>
                      <div className={styles.review__brandContainer}>
                        <figure className={styles.review__brand}>
                          <img 
                            src={logoWebflow}
                            alt="Webflow" 
                          />
                        </figure>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  ) 
}


export default MenuCard;