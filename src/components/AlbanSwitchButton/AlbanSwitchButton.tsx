import { useTranslation } from "react-i18next";
import styles from "./AlbanSwitchButton.module.css";
import { SwitchArrowIcon } from "../../icons/icons";

const AlbanSwitchButton: React.FC<{
  setCurrentPage: (page: string) => void;
}> = ({ setCurrentPage }) => {
  const { t } = useTranslation();
  return (
    <button
      className={styles.container}
      onClick={() => setCurrentPage("Aseeb")}
    >
      <span>{t(`button.switchAseeb`)}</span>
      <SwitchArrowIcon color="#fff" />
    </button>
  );
};

export default AlbanSwitchButton;
