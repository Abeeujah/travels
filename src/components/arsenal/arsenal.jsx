import ServiceItem from "../service-item/service-item";
import utilStyles from "../../styles/utils.module.css";
import styles from "./Arsenal.module.css";
import {
  faBriefcase,
  faFileSignature,
  faHeadset,
  faPassport,
  faPersonWalkingLuggage,
  faPlaneDeparture,
  faStar,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const serviceItems = [
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
    id: 2,
    icon: faUmbrellaBeach,
    head: `personalization`,
    text: `We offer personalized travel planning services to help you 
    make the most of your trip. We'll tailor your itinerary to your 
    interests and budget.`,
  },
  {
    id: 3,
    icon: faPersonWalkingLuggage,
    head: `convenience`,
    text: `We offer a convenient travel service that takes care of 
    everything for you. We book flights and hotels, transportation 
    and more.`,
  },
  {
    id: 4,
    icon: faBriefcase,
    head: `corporate travels`,
    text: `We offer tailored itineraries, seamless logistics, and 
    exclusive accommodations to ensure an improved and productive journey.`,
  },
  {
    id: 5,
    icon: faStar,
    head: `VIP treatment`,
    text: `We offer access to exclusive amenities and services, such as 
    airport lounges, priority check-in and boarding, and room upgrades. `,
  },
  {
    id: 6,
    icon: faPlaneDeparture,
    head: `travel insurance`,
    text: `We offer a wide range coverage options including, including 
    trip cancellation and interruption, medical expenses, and lost luggage.`,
  },
  {
    id: 7,
    icon: faHeadset,
    head: `customer support`,
    text: `We are available to answer any questions you have
    about your travel plans, from booking flights and hotels to finding 
    the best deals.`,
  },
];

const Arsenal = () => {
  return (
    <section id="services">
      <div className={`${utilStyles.container} ${utilStyles.mBlock}`}>
        <div>
          <div className={`${styles.center} ${utilStyles.textCapitalize}`}>
            <h2 className={`${utilStyles.heading2Xl} ${styles.mBlock}`}>
              our services
            </h2>
            <p>Plan your perfect trip with our expert help.</p>
          </div>
          <div className={`${utilStyles.grid} ${styles.grid4}`}>
            {serviceItems.map(({ id, icon, head, text }) => (
              <ServiceItem key={id} icon={icon} head={head} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
