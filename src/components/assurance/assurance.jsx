import Image from "next/image";
import PitchItem from "../pitch-item/pitch-item";

import Picture from "../../../public/images/Assurance.webp";
import utilStyles from "../../styles/utils.module.css";
import styles from "./Assurance.module.css";
import {
  faCartFlatbedSuitcase,
  faHeadset,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const Assurance = () => {
  return (
    <section>
      <div>
        <div className={`${utilStyles.container}`}>
          <div
            className={`${utilStyles.grid} ${utilStyles.grid2} ${styles.grid}`}
          >
            <div>
              <h3
                className={`${utilStyles.textCapitalize} ${utilStyles.heading2Xl}`}
              >
                why book with us?
              </h3>
              <PitchItem
                icon={faUmbrellaBeach}
                head={"Customized trip planning and itinerary creation"}
                text={
                  "We create customized itineraries that are tailored to your interests, preferences, and budget."
                }
              />
              <PitchItem
                icon={faCartFlatbedSuitcase}
                head={"fast-track immigration and customs clearance"}
                text={
                  "With our fast-track service, you can skip the long lines and get through the process quickly and easily."
                }
              />
              <PitchItem
                icon={faHeadset}
                head={"around-the-clock support dedicated for you"}
                text={
                  "Our dedicated team of travel experts is available 24/7 to help you with any travel needs, big or small."
                }
              />
            </div>
            <div className={`${styles.hidden}`}>
              <Image
                src={Picture}
                width={554}
                height={550}
                alt=""
                loading="lazy"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assurance;
