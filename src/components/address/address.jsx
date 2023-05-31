import utilStyles from "../../styles/utils.module.css";
import styles from "./Address.module.css";

const Address = ({ branch, location, address }) => {
  return (
    <div className={`${utilStyles.flexCol} ${styles.flex}`}>
      <p>{branch}</p>
      <h3 className={`${utilStyles.headingMd} ${utilStyles.textCapitalize}`}>
        {location}
      </h3>
      <p className={styles.textCenter}>{address}</p>
    </div>
  );
};

export default Address;
