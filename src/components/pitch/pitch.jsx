import Image from "next/image";
import Picture from "../../../public/images/Pitch.webp";
import styles from "./Pitch.module.css";
import utilStyles from "../../styles/utils.module.css";
import PitchItem from "../pitch-item/pitch-item";
import {
  faPlaneCircleCheck,
  faUmbrellaBeach,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

const Pitch = () => {
  return (
    <section id="pitch">
      <div className={utilStyles.mBlock}>
        <div className={`${utilStyles.container}`}>
          <div
            className={`${utilStyles.textCapitalize} ${styles.grid} ${styles.mb2}`}
          >
            <h3 className={`${utilStyles.headingXl} ${utilStyles.neutral950}`}>
              your gateway to unforgettable travel experiences!
            </h3>
            <p className={`${styles.gridP} ${utilStyles.neutral900}`}>
              smooth travel experience tailored to your unique needs and
              preferences
            </p>
          </div>
          <div className={styles.grid}>
            <div>
              <PitchItem
                icon={faPlaneCircleCheck}
                head={"Experience the world, one journey at a time."}
                text={`Start experiencing the world, one journey at a time with
                 a personalized itenary just for you`}
              />
              <PitchItem
                icon={faUmbrellaBeach}
                head={"Create memories that last a lifetime with us."}
                text={`Life is short, but memories last a lifetime. Create 
                  unforgettable experiences with our personalized travel services.`}
              />
              <PitchItem
                icon={faUserAstronaut}
                head={"Travel without limits, explore without boundaries."}
                text={
                  "Unlock the world's hidden gems, cruise without boundaries with our expert guidance "
                }
              />
            </div>
            <div className={styles.pitchImgCont}>
              <Image
                src={Picture}
                width={556}
                height={478}
                alt={""}
                loading="lazy"
                className={styles.pitchImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
