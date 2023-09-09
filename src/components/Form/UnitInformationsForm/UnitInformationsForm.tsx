import styles from "./UnitInformationsForm.module.css";
import { useTranslation } from "react-i18next";

const UnitInformationsForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {t(`unitInformations.registerInterest`)}
      </div>
      <div className={styles.description}>
        {t(`unitInformations.completeForm`)}
      </div>
      <form>
        <input
          type="text"
          className={styles.input}
          placeholder={t(`unitInformations.fullName`)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder={t(`unitInformations.phoneNumber`)}
        />
        <button className={styles.button}>
          {t(`unitInformations.registerInterest`)}
        </button>
      </form>
    </div>
  );
};

export default UnitInformationsForm;
