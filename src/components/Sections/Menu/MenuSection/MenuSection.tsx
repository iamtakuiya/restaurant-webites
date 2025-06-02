import React from "react";
// Component

import Image from "../../../Common/Image";
import MenuList from "../MenuList";
import { drinkMenuData, foodMenuData } from "./menudata.d";
import styles from './styles.module.scss';

import sideImage from '../../../../assets/images/menu/menu-4.png'
import dessertImage from '../../../../assets/images/menu/menu-5.png'


const MenuSection: React.FC = () => (
  <>
    <div>
      {/* <Image /> */}
      <h3>Special Menu</h3>
      {/* <Image /> */}
    </div>
    <section className={styles.menuList}>
      <div className={styles.menuList_headingContainer}>
        <div className={styles.doublelineContainer}>
          <div className={styles.doublelineUpper}></div>
          <div className={styles.doublelineBottom}></div>
        </div>
        <h2 className={styles.menuList_heading}>Menu</h2>
        <div className={styles.doublelineContainer}>
          <div className={styles.doublelineUpper}></div>
          <div className={styles.doublelineBottom}></div>
        </div>
      </div>
      <div className={styles.menuList_menus}>
        <div className={styles.menuList__foodMenu}>
          <h3 className={styles.menuList__title}>Food</h3>
          {foodMenuData.map((category) => (
            <>
              <MenuList key={category.title} category={category} />
              {category.title === 'Side & More' && (
                <Image src={sideImage} alt="side & more image" />
              )}
              {category.title === 'Desserts' && (
                <Image src={dessertImage} alt="dessert image" />
              )}
            </>
          ))}
        </div>
        <div className={styles.menuList__drinkMenu}>
          <h3 className={styles.menuList__title}>Drink</h3>
          <MenuList category={drinkMenuData[0]} />
        </div>
      </div>
    </section>
  </>
);

export default MenuSection;