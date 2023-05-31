import Image from "next/image";
import {
  faPassport,
  faPersonWalkingLuggage,
  faPlaneDeparture,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Picture from "../../../public/images/Profile.webp";

import utilStyles from "../../styles/utils.module.css";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="About">
      <div className={`${utilStyles.mBlock} ${styles.mBlock}`}>
        <div className={`${utilStyles.container}`}>
          <div
            className={`${utilStyles.grid} ${utilStyles.grid2} ${styles.grid}`}
          >
            <div className={styles.gridImg}>
              <Image
                src={Picture}
                priority
                fill
                // placeholder="blur"
                // blurDataURL={"/images/Profile.webp"}
                className={styles.img}
                alt="Decoration"
                sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className={`${utilStyles.textCapitalize} ${styles.gridText}`}>
              <h2 className={`${utilStyles.heading2Xl}`}>
                about <br className={styles.lb} /> naskaxe travels
              </h2>
              <p>
                At Naskaxe Travels, we are passionate about helping people
                explore the world and create unforgettable memories. Our team of
                experienced travel experts are dedicated to providing
                personalized travel solutions tailored to your interests,
                preferences, and budget.
              </p>
              <p>
                we are a full-service travel agency that takes the hassle out of
                planning your next adventure. We offer a wide range of services,
                from finding the best deals on flights and accommodations to
                creating customized itineraries that include unique and
                off-the-beaten-path experiences. We're committed to providing
                our clients with the best possible travel experience, and we're
                always available to answer your questions and help you plan your
                perfect trip.
              </p>
              <div className={`${utilStyles.flex} ${styles.spaceBet}`}>
                <FontAwesomeIcon icon={faPassport} size={"3x"} />
                <FontAwesomeIcon icon={faPlaneDeparture} size={"3x"} />
                <FontAwesomeIcon icon={faPersonWalkingLuggage} size={"3x"} />
                <FontAwesomeIcon icon={faUmbrellaBeach} size={"3x"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
