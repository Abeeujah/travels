import styles from "./TestimonialItem.module.css";
import utilStyles from "../../styles/utils.module.css";
import Picture from "../../../public/images/str.webp";
import Image from "next/image";

const TestimonialItem = ({ image, name, profession, testimony }) => {
  return (
    <div className={`${utilStyles.textCapitalize} ${styles.testimony}`}>
      <div className={`${utilStyles.flex} ${styles.central}`}>
        <Image
          src={image || Picture}
          width={60}
          height={60}
          loading="lazy"
          alt={`${name} Testifier`}
          className={styles.testifier}
        />
        <div>
          <p className={`${utilStyles.headingMd}`}>{name}</p>
          <p>{profession}</p>
        </div>
      </div>
      <p>{testimony}</p>
    </div>
  );
};

export default TestimonialItem;
