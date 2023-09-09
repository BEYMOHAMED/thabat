import { Dispatch, SetStateAction, useState } from "react";
import { CloseIcon, GalleryIcon, VRIcon } from "../../icons/icons";
import UnitInformationsForm from "../Form/UnitInformationsForm/UnitInformationsForm";
import ProjectSwitchButton from "../ProjectSwitchButton/ProjectSwitchButton";
import styles from "./UnitInformations.module.css";
import { useTranslation } from "react-i18next";

interface UnitInformationsProps {
  setCurrentPage: (page: string) => void;
  showUnitInfo: boolean;
  setShowUnitInfo: Dispatch<SetStateAction<boolean>>;
}

const UnitInformations: React.FC<UnitInformationsProps> = ({
  setCurrentPage,
  showUnitInfo,
  setShowUnitInfo,
}) => {
  const { t } = useTranslation();

  const toggleUnitInfo = () => {
    setShowUnitInfo(!showUnitInfo);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${showUnitInfo ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={toggleUnitInfo}>
          <CloseIcon color="#fff" />
        </button>
        <div className={styles.availability}>
          {t(`unitInformations.available`)}
        </div>
        <div className={styles.title}>{t(`unitInformations.unitName`)}</div>
        <div className={styles.description}>
          {t(`unitInformations.description`)}
        </div>
        <div className={styles.buttonsWrapper}>
          <button className={styles.galleryButton}>
            <GalleryIcon color="#fff" />
            {t(`button.viewGallery`)}
          </button>
          <button className={styles.exploreButton}>
            <VRIcon color="#fff" />
            {t(`button.explore360`)}
          </button>
        </div>
        <UnitInformationsForm />
      </div>
      <ProjectSwitchButton
        setCurrentPage={setCurrentPage}
        show={showUnitInfo}
      />
    </div>
  );
};

export default UnitInformations;
