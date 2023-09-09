import { LogoIcon } from "../../icons/icons";
import styles from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={styles.container}>
      <LogoIcon color="#fff" />
    </div>
  );
};

export default Logo;
