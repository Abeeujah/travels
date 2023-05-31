import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import utilStyles from "../../styles/utils.module.css";
import styles from "./Controls.module.css";
import Button from "../button/button";

const Controls = ({ head, leftClick, rightClick }) => {
  return (
    <div className={`${styles.spaceBet} ${utilStyles.flex} ${styles.mb1}`}>
      <h2 className={`${utilStyles.textCapitalize} ${utilStyles.headingXl}`}>
        {head}
      </h2>
      <div>
        <Button aria-label={"Previous"} onClick={leftClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button aria-label={"Next"} onClick={rightClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};

export default Controls;
