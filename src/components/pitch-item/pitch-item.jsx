import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../../styles/utils.module.css";
import styles from "./PitchItem.module.css";

const PitchItem = ({ icon, head, text }) => {
  return (
    <div className={`${styles.flex}`}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon
          icon={icon || faPalette}
          size={"2x"}
          className={styles.icon}
        />
      </div>
      <div className={styles.textCenter}>
        <p className={`${utilStyles.headingLg} ${utilStyles.textCapitalize}`}>
          {head}
        </p>
        <p className={`${utilStyles.neutral900}`}>{text}</p>
      </div>
    </div>
  );
};

export default PitchItem;
