import React, { useState } from "react";
// Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/logo.png';
import styles from './Header.module.scss';

const Header: React.FC= () => {
  const [showButton, setShowButton] = useState(true); // Initial state

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="LaidBack logo" />
      </div>
      <nav className={styles.navbar}>
        <ul className={`linkContainer ${styles.navbar__linkMobile}`}>
          {/* Use Link for client-side navigation */}
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/">Home</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/hoursAndLocation">Hours & Location</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/menus">Menus</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/aboutUs">About Us</Link>
          </li>
          <li className={styles.navbar__item}>
            <Link className={styles.navbar__link} to="/events">Events Info</Link>
          </li>
        </ul>
      </nav>
      <div className={`btnContainer ${styles.navbar__btnMobile}`}>
        <Link to="/reserve">
          <Button 
            variant='reserve' 
            cta='Reserve' 
          />
        </Link>
      </div>
      <FontAwesomeIcon
        className={styles.navbar__icon}
        icon={faBars} 
      />
    </header>
  );
};

export default Header;