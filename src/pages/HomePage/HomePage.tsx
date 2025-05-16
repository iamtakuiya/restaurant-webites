import React from 'react';

// Fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';

// Images
import topMenu1 from '../../assets/images/home/top-menu-1.png';
import avatar from '../../assets/images/home/avatar.png';
import logoWebflow from '../../assets/images/home/logo-webflow.png';

import styles from './HomePage.module.scss';

interface ButtonProps  {
  variant?: 'primary' | 'secondary' | 'reserve';
}

const HomePage: React.FC<ButtonProp> = ({ variant = 'primary' }) => {
  return (
    <>
    {/* Header */}
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="LaidBack logo" />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.linkContainer}>
          <li className={styles.navbar__item}><a className={styles.navbar__link} href="/">Home</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link} href="/hoursAndLocation">Hours & Location</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link} href="/menus">Menus</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link} href="/aboutUs">About Us</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link} href="/event">Events Info</a></li>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/hoursAndLocation">Hours & Location</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/event">Events Info</Link></li> */}
        </ul>
      </nav>
      <div className={`${styles.btnContainer}`}>
        <button className={`${styles.btn} ${styles[`btn--${variant = 'reserve'}`]}`}>Reserve</button>
      </div>
    </header>
    {/* Main */}
    <main className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.hero__heroContent}>
          <div className={styles.hero__textContainer}>
            <h1 className={styles.hero__heading}>Welcome to LaidBack Eats<br />Your Dining Escape</h1>
            <p className={styles.hero__text}>Indulge in a delightful culinary experience where comfort meets flavor. Join us for a meal that feels like home.</p>
          </div>
          <div className={styles.btnContainer}>
            <button className={`${styles.btn} ${styles[`btn--${variant = 'primary'}`]}`}>View Menu</button>
            <button className={`${styles.btn} ${styles[`btn--${variant = 'secondary'}`]}`}>Order Online</button>
          </div>
        </div>
      </section>
      {/* Top Menu */}
      <MenuCard />
    </main>
    </>
  );
};

interface MenuCardProps {
  variant?: 'normal' | 'full-width';
}

const MenuCard: React.FC<MenuCardProps> = ({ variant }) => {
  return (
    <section className={styles.topMenu}>
      <div className={styles.topMenu__headings}>
          <span>~ Trending ~</span>
          <h2>Top Menu</h2>
          <p>You'll <span><FontAwesomeIcon icon={faHeart} /></span> these</p>
      </div>
      <article className={styles.topMenu__card}>
        <header>
          <figure className={styles.topMenu__imgContainer}>
            <img 
              src={topMenu1}
              alt="Classic Margherita Pizza" 
            />
          </figure>
        </header>
        <div className={styles.topMenu__content}>
          <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
          <div className={styles.topMenu__contentDetails}>
            <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.topMenu__price}>$14</span>
          </div>
        </div>
      </article>
      <article className={styles.topMenu__card}>
        <header>
          <figure className={styles.topMenu__imgContainer}>
            <img 
              src={topMenu1}
              alt="Classic Margherita Pizza" 
            />
          </figure>
        </header>
        <div className={styles.topMenu__content}>
          <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
          <div className={styles.topMenu__contentDetails}>
            <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
            <span className={styles.topMenu__price}>$14</span>
          </div>
        </div>
      </article>
      <article className={styles.topMenu__card}>
        <header>
          <figure className={styles.topMenu__imgContainer}>
            <img 
              src={topMenu1}
              alt="Classic Margherita Pizza" 
            />
          </figure>
        </header>
        <div className={`${styles.topMenu__content} ${styles.topMenu__contentFull}`}>
          <div className={styles.topMenu__contentLeft}>
            <h3 className={styles.topMenu__title}>Classic Margherita Pizza</h3>
            <div className={styles.topMenu__contentDetails}>
              <p className={styles.topMenu__body}>Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust</p>
              <span className={styles.topMenu__price}>$14</span>
            </div>
          </div>
          <div className={styles.topMenu__contentRight}>
            <div className={styles.rating}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.review}></div>
            <blockquote>
              <p>"A perfect spot for casual dining with friends!"</p>
              <footer className={styles.review__reviewer}>
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
                <div className={styles.review__brandContainer}>
                  <figure className={styles.review__brand}>
                    <img 
                      src={logoWebflow}
                      alt="Webflow" 
                    />
                  </figure>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </article>
    </section>
  ) 
}

export default HomePage;