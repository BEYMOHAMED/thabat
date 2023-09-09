import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CloseIcon, GalleryIcon, VRIcon } from "../../icons/icons";
import UnitInformationsForm from "../Form/UnitInformationsForm/UnitInformationsForm";
import styles from "./AlbanUnitInformations.module.css";

const AlbanUnitInformations: React.FC<{
  show: boolean;
  toggleShow: () => void;
}> = ({ show, toggleShow }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.card} ${show ? styles.show : ""}`}>
      <button className={styles.closeButton} onClick={toggleShow}>
        <CloseIcon color="#fff" />
      </button>
      <div className={styles.availability}>
        {t(`AlbanUnitInformations.available`)}
      </div>
      <div className={styles.title}>{t(`AlbanUnitInformations.unitName`)}</div>
      <div className={styles.description}>
        {t(`AlbanUnitInformations.description`)}
      </div>
      <div className={styles.table}>
        <div className={styles.tableRow}>
          <span className={styles.itemName}>
            {t(`AlbanUnitInformations.totalUnits`)}
          </span>
          <span className={styles.itemName}>24</span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.itemName}>
            {t(`AlbanUnitInformations.city`)}
          </span>
          <span className={styles.itemName}>
            {t(`AlbanUnitInformations.riad`)}
          </span>
        </div>
      </div>
      <UnitInformationsForm />
    </div>
  );
};

export default AlbanUnitInformations;
