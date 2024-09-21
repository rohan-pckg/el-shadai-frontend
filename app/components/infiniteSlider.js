import React from "react";
import styles from "./infiniteSliderStyles.module.scss";

const InfiniteSlider = ({ values }) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {values.map((value, index) => (
          <div key={index} className={styles.slide}>
            {value}
          </div>
        ))}
        {values.map((value, index) => (
          <div key={index + values.length} className={styles.slide}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
