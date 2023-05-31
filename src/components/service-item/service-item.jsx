import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import utilStyles from "../../styles/utils.module.css";
import styles from "./Serviceitem.module.css";

const ServiceItem = ({ icon, head, text }) => {
  return (
    <div className={`${utilStyles.textCapitalize} ${styles.flex}`}>
      <FontAwesomeIcon
        icon={icon || faPalette}
        className={styles.icon}
        size={"2x"}
      />
      <p className={styles.head}>{head}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ServiceItem;
