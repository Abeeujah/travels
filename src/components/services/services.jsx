import utilStyles from "../../styles/utils.module.css";
import styles from "./Services.module.css";
import {
  faBriefcase,
  faFileSignature,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";
import ServiceItem from "../service-item/service-item";

const serviceArr = [
  {
    id: 0,
    icon: faPassport,
    head: `passport and visa`,
    text: `Our team of experts can help you get a passport and visa. 
    We will guide you through the process and help you avoid any errors.`,
  },
  {
    id: 1,
    icon: faFileSignature,
    head: `residence permit`,
    text: `with our knowledge of immigration processes, our team 
    of experts can help you acquire a residence permit in the country 
    of your choice.`,
  },
  {
    id: 4,
    icon: faBriefcase,
    head: `corporate travels`,
    text: `We offer tailored itineraries, seamless logistics, and 
    exclusive accommodations to ensure an improved and productive journey.`,
  },
];

const Services = () => {
  return (
    <section id="Services">
      <div className={`${utilStyles.container} ${utilStyles.mBlock}`}>
        <div
          className={`${utilStyles.placeCenter} ${utilStyles.textCapitalize}`}
        >
          <h4 className={utilStyles.headingXl}>services we offer</h4>
          <p className={`${utilStyles.neutral900} ${utilStyles.textCenter}`}>
            Plan your perfect trip with our expert help.
          </p>
          <div className={`${utilStyles.flex} ${styles.flex}`}>
            {serviceArr.map(({ id, icon, head, text }) => (
              <ServiceItem icon={icon} head={head} text={text} key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
