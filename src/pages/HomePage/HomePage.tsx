import React from 'react';
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
      <div className={styles.logoWrapper}>
        <img src={logo} alt="LaidBack logo" />
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.linkWrapper}>
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
      <div className={`${styles.btnWrapper}`}>
        <button className={`${styles.btn} ${styles[`btn--${variant = 'reserve'}`]}`}>Reserve</button>
      </div>
    </header>
    {/* Main */}
    <main className={styles.homepage}>
      <section className={styles.hero}>
        <h1>Hero section</h1>
      </section>
    </main>
    </>
  );
};

export default HomePage;