import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";
import { ArrowleftIcon, ArrowrightIcon } from "../../icons/icons";

interface ImageCarouselProps {
  images: string[];
  onIndexChange: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  onIndexChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onIndexChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onIndexChange(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        style={{
          width: "100%",
          position: "relative",
          maxWidth: 1100,
        }}
      >
        <button
          className={`${styles.carouselButton} ${styles.left}`}
          onClick={handlePrevious}
        >
          <ArrowleftIcon color="#000" />
        </button>
        <img
          className={styles.mainImage}
          src={images[currentIndex]}
          alt={`carousel-img-${currentIndex}`}
        />
        <button
          className={`${styles.carouselButton} ${styles.right}`}
          onClick={handleNext}
        >
          <ArrowrightIcon color="#000" />
        </button>
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <img
            key={index}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.active : ""
            }`}
            src={img}
            alt={`thumbnail-${index}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
