import { DoubleArrowLeftIcon, DoubleArrowRighttIcon } from "../../icons/icons";
import styles from "./DetailsButton.module.css";
import { useTranslation } from "react-i18next";

const DetailsButton: React.FC<{
  toggleShow: () => void;
}> = ({ toggleShow }) => {
  const { t } = useTranslation();
  return (
    <button className={styles.container} onClick={toggleShow}>
      <span>{t(`button.showDetails`)}</span>
      <div className={styles.iconWrapper}>
        <DoubleArrowRighttIcon />
      </div>
    </button>
  );
};

export default DetailsButton;
