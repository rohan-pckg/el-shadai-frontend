import { useState } from "react";
import sliderStyles from "../components/sliderStyles.module.scss";

const images = ["/sample.jpg", "/sample1.jpg", "/sample2.jpg"];

const slider = ({ images }) => {
  slider;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={sliderStyles.carousel}>
      <div className={sliderStyles.carousel_inner}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={sliderStyles.carousel_image}
        />
      </div>
      <button
        onClick={prevSlide}
        className={`${sliderStyles.carousel_button}  ${sliderStyles.prev}`}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className={`${sliderStyles.carousel_button}  ${sliderStyles.next}`}
      >
        ›
      </button>
    </div>
  );
};

export default slider;
