import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./AlbanPage.module.css";
import "./slide.css";
import DetailsButton from "../../components/DetailsButton/DetailsButton";
import AlbanTopBar from "../../components/AlbanTopBar/AlbanTopBar";
import AlbanUnitInformations from "../../components/AlbanUnitInformations/AlbanUnitInformations";
import { useState } from "react";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

const AlbanPage: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  const [showUnitInfo, setShowUnitInfo] = useState(false);

  const toggleUnitInfo = () => {
    setShowUnitInfo(!showUnitInfo);
  };

  const handleIndexChange = (index: number) => {
    setCurrentBackground(images[index]);
  };

  const images = [
    "/assets/images/item1.jpg",
    "/assets/images/item2.jpg",
    "/assets/images/item1.jpg",
    "/assets/images/item2.jpg",
    "/assets/images/item1.jpg",
    "/assets/images/item2.jpg",
    "/assets/images/item1.jpg",
    "/assets/images/item2.jpg",
    "/assets/images/item1.jpg",
    "/assets/images/item2.jpg",
    "/assets/images/item1.jpg",
  ];

  const [currentBackground, setCurrentBackground] = useState(images[0]);
  return (
    <div className={styles.container}>
      <DetailsButton toggleShow={toggleUnitInfo} />
      <AlbanTopBar setCurrentPage={setCurrentPage} />
      <div
        className={styles.carousel}
        style={{
          left: showUnitInfo ? "25%" : "0%",
          backgroundImage: `url(${currentBackground})`,
        }}
      >
        <ImageCarousel images={images} onIndexChange={handleIndexChange} />
      </div>
      <AlbanUnitInformations toggleShow={toggleUnitInfo} show={showUnitInfo} />
    </div>
  );
};

export default AlbanPage;
