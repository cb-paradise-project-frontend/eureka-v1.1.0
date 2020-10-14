import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = ({ 
  children, 
  link, 
  currentNav,
  handleNavChange, 
}) => (
  <a
    className={styles.navi_item}
    href={link}
    onClick={() => handleNavChange(children)}
  >
    {children}
    {currentNav === children 
      && 
    <span className={styles.active}>&#8226;</span>}
  </a>
);

export default Navigation;
