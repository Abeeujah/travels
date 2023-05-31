import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Picture from "../../../public/images/Newsletter.webp";
import styles from "./Newsletter.module.css";
import LetterForm from "../letter-form/letter-form";

const NewsLetter = () => {
  return (
    <section id="newsletter">
      <div className={`${utilStyles.container} ${styles.mb4}`}>
        <div className={`${styles.grid}`}>
          <div>
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
              <h6
                className={`${utilStyles.heading2Xl} ${styles.rem4} ${styles.tc}`}
              >
                join our <br className={styles.lb} /> newsletter
              </h6>
              <p className={`${utilStyles.headingMd} ${styles.tc}`}>
                don't miss out on anything
              </p>
              <div>
                <LetterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
