import React from "react";
// Component
import styles from './MenuItem.module.scss';

// Interface
interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <section className={styles.MenuItem}>
    <div className={styles.MenuItem__details}>
      <header className={styles.MenuItem__header}>
        <h2 className={styles.MenuItem__title}>Pizza</h2>
      </header>
      <div className={styles.MenuItem__menus}>
        <div className={styles.MenuItem__menu}>
          <h3 className={styles.MenuItem__name}>{name}</h3>
          <div className={styles.MenuItem__description}>
            <p className={styles.MenuItem__body}>{description}</p>
            <span className={styles.MenuItem__price}>{price}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MenuItem;