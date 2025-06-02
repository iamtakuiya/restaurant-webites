import React from 'react';

// Component
import { MenuCard, MenuSection } from '../../components/Sections/Menu';
// Data
import { homeMenuItems } from '../../components/Sections/Menu/data/menuitems';


const MenuPage: React.FC = () => {
  return (
    <>
      <MenuCard menuItems={homeMenuItems} />
      <MenuSection />
    </>
  );
};

export default MenuPage;