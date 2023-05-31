import styles from "./Portfolio-item.module.css";
import utilStyles from "../../styles/utils.module.css";
import Picture from "../../../public/images/str.webp";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ destination }) => {
  const { picture, location } = destination;
  return (
    <div
      className={`${styles.whiteBg} ${utilStyles.colorBlack} ${styles.gap} ${utilStyles.flexCol} ${styles.p5} ${styles.rounded}`}
    >
      <div className={`${styles.hidden} ${styles.rounded}`}>
        <Image
          className={`${styles.portfolioImage} ${styles.rounded}`}
          src={picture || Picture}
          width={554}
          height={355}
          loading="lazy"
          alt=""
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className={`${utilStyles.textCapitalize} ${utilStyles.headingMd}`}>
        {location || "london"}
      </p>
      <Link
        className={`${styles.link} ${utilStyles.link} ${styles.rounded}`}
        href={"/services"}
      >
        Learn More
      </Link>
    </div>
  );
};

export default PortfolioItem;
