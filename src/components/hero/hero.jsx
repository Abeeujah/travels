import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";
import utilStyles from "../../styles/utils.module.css";
import Picture from "../../../public/images/HeroImage.webp";

const Hero = () => {
  return (
    <section id="hero" className={`${utilStyles.whiteBg}`}>
      <div className={`${styles.heroSection}`}>
        <div
          className={`${utilStyles.container} ${utilStyles.colorBlack} 
          ${utilStyles.textCapitalize} ${styles.heroContainer}`}
        >
          <div
            className={`${utilStyles.flexCol} ${utilStyles.gap1} ${styles.center}`}
          >
            <h1 className={`${utilStyles.heading2Xl} ${styles.rem4}`}>
              the world is yours to explore, we'll take you there.
            </h1>
            <p className={utilStyles.colorGrey}>
              travelling is not just about visiting new places, but also about
              creating unforgettable experiences that will last a lifetime
            </p>
            <Link
              className={`${styles.heroButton} ${utilStyles.colorWhite} ${utilStyles.textUpperCase}`}
              href={"contact"}
            >
              book a trip <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className={styles.hidden}>
            <Image
              width={600}
              height={1000}
              alt=""
              src={Picture}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
