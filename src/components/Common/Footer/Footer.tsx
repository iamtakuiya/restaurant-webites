import React from "react";
import Button from "../Button";
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    {/* Top Section */}
    <section className={styles.footer_sectionTop}>
      <div className={styles.sitemapContainer}>
        <nav className={styles.sitemap}>
          <ul className="linkContainer">
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/">Press</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/hoursAndLocation">Jobs</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/menus">Contact</a></li>
          </ul>
        </nav>
        <div className="btnContainer">
          <Button variant='signup' cta='Email Signup' />
        </div>
      </div>
      <div className={styles.socials}>
        <ul className="linkContainer">
          <li className={styles.socials__item}>
            <a className={styles.socials__link} href="/">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li className={styles.socials__item}>
            <a className={styles.socials__link} href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className={styles.socials__item}>
            <a className={styles.socials__link} href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer__conditional}>
        <nav className={styles.sitemap}>
          <ul className="linkContainer">
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/">Terms and Conditions</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/hoursAndLocation">Privacy Policy</a></li>
            <li className={styles.sitemap__item}><a className={styles.sitemap__link} href="/menus">Cookie Policy</a></li>
          </ul>
        </nav>
      </div>
    </section>
    {/* Horizontal line */}
    <div className="lineHorizontal--thin"></div>
    {/* Bottom section */}
    <section className={styles.footer_sectionBottom}>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__text}>&copy; 2024 LaidBack Eats. All rights reserved.</p>
      </div>
    </section>
  </footer>
);

export default Footer;