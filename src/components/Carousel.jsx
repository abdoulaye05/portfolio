import styles from "./Carousel.module.scss";

function Carousel({ children }) {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
