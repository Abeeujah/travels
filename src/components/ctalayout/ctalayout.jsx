import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Picture from "../../../public/images/CTAImage.webp";
import styles from "./Ctalayout.module.css";
import Link from "next/link";

const CtaLayout = () => {
  return (
    <section id="newsletter">
      <div className={`${utilStyles.container} ${styles.mb4}`}>
        <div className={`${styles.grid}`}>
          <div className={``}>
            <Image
              src={Picture}
              width={554}
              height={453}
              className={styles.image}
              loading="lazy"
              alt={""}
            />
          </div>
          <div>
            <div
              className={`${utilStyles.textCapitalize} ${utilStyles.central} ${styles.pad1}`}
            >
              <p>let's get started</p>
              <h6
                className={`${utilStyles.heading2Xl} ${styles.rem4} ${styles.tc}`}
              >
                book your trip today
              </h6>
              <p
                className={`${utilStyles.headingMd} ${styles.tc} ${styles.mb1}`}
              >
                don't miss out on anything
              </p>
              <Link className={styles.ctaButton} href={"/contact"}>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaLayout;
