import { SwitchArrowIcon } from "../../icons/icons";
import styles from "./ProjectSwitchButton.module.css";
import { useTranslation } from "react-i18next";

const ProjectSwitchButton: React.FC<{
  show: boolean;
  setCurrentPage: (page: string) => void;
}> = ({ show, setCurrentPage }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={() => setCurrentPage("Alban")}
      className={`${styles.container} ${show ? styles.show : ""}`}
    >
      <span>{t(`button.switchAlban`)}</span>
      <SwitchArrowIcon color="#fff" />
    </button>
  );
};

export default ProjectSwitchButton;
