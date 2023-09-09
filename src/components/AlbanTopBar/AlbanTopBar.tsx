import { AlbanLogoIcon } from "../../icons/icons";
import AlbanSwitchButton from "../AlbanSwitchButton/AlbanSwitchButton";
import styles from "./AlbanTopBar.module.css";

const AlbanTopBar: React.FC<{
  setCurrentPage: (page: string) => void;
}> = ({ setCurrentPage }) => {
  return (
    <div className={styles.container}>
      <AlbanSwitchButton setCurrentPage={setCurrentPage} />
      <div className={styles.logoWrapper}>
        <AlbanLogoIcon color="#fff" />
      </div>
    </div>
  );
};

export default AlbanTopBar;
