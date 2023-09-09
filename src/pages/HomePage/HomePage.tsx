import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import UnitInformations from "../../components/UnitInformations/UnitInformations";
import { PropertyOverlayIcon } from "../../icons/icons";
import styles from "./HomePage.module.css";

const HomePage: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  const [showUnitInfo, setShowUnitInfo] = useState(false);

  return (
    <div className={styles.container}>
      <Logo />
      <UnitInformations
        setCurrentPage={setCurrentPage}
        showUnitInfo={showUnitInfo}
        setShowUnitInfo={setShowUnitInfo}
      />
      <div
        className={styles.overlayWrapper}
        onClick={() => setShowUnitInfo(true)}
      >
        <PropertyOverlayIcon color="#fff" />
      </div>
    </div>
  );
};

export default HomePage;
