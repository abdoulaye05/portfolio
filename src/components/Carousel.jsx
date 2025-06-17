import React from 'react';
import styles from './WorksSection.module.scss';

function Carousel({ children }) {
  return (
    <div className={styles.carouselWrapper}>
      {children}
    </div>
  );
}

export default Carousel; 