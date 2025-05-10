import React from 'react';


interface MainLayoutProps {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps>  = ({ children }) => {
  return (
    <div className=''>
      <h1>MainLayout</h1>
    </div>
  );
};

export default MainLayout;