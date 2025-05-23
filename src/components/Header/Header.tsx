import React from "react";
// Component
import Button from "../Button";

// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';
import styles from './style.module.scss';

const Header: React.FC= () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="LaidBack logo" />
    </div>
    <nav className={styles.navbar}>
      <ul className="linkContainer">
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
    <div className="btnContainer">
      <Button variant='reserve' cta='Reserve' />
    </div>
  </header>
);

export default Header;