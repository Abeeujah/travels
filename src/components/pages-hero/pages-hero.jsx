import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import utilStyles from "../../styles/utils.module.css";
import styles from "./Pageshero.module.css";

const PagesHero = ({ title, navigation, image }) => {
  const divStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };
  return (
    <section id="Hero">
      <div className={`${styles.heroContainer}`} style={divStyle}>
        <div className={`${utilStyles.container} ${utilStyles.textCapitalize}`}>
          <h1 className={`${utilStyles.heading2Xl} ${styles.rem4}`}>{title}</h1>
          <div className={styles.crumbs}>
            <Link className={styles.link} href={"/"}>
              Home
            </Link>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link className={styles.link} href={`/${navigation}`}>
              {navigation}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesHero;
