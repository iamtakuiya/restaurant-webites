import React from "react";
// Component
import type { CategoryData } from '../MenuSection/menudata.d';
import MenuItem from "../MenuItem";
import styles from './MenuList.module.scss';

interface MenuProps {
  category: CategoryData;
}

const MenuList: React.FC<MenuProps> = ({ category }) => (
  <div className={styles.MenuItem}>
    <div className={styles.MenuItem__details}>
      <header className={styles.MenuItem__header}>
        <h2 className={styles.MenuItem__title}>{category.title}</h2>
      </header>
      <div className={styles.MenuItem__menus}>
        {category.items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default MenuList;