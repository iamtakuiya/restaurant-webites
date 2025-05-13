import React from 'react';

// Fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import styles from './HomePage.module.scss';

interface ButtonProps  {
  variant?: 'primary' | 'secondary' | 'reserve';
}

const HomePage: React.FC<ButtonProps> = ({ variant = 'primary' }) => {
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
    </main>
    </>
  );
};

export default HomePage;