import styles from "./ContactLegend.module.css";
import utilStyles from "../../styles/utils.module.css";
import Address from "../address/address";

const offices = [
  {
    id: 0,
    branch: "headquarters",
    location: "abuja",
    address:
      "SUITE A205, A A RANO PLAZA, ALONG CITY GATE, AIRPORT RD ABUJA.".toLowerCase(),
  },
  {
    id: 1,
    branch: "UK office",
    location: "london",
    address:
      "Thames innovation center, 2 veridion way Erith Kent DA8 4AL".toLowerCase(),
  },
  {
    id: 2,
    branch: "UAE office",
    location: "Dubai",
    address:
      "SUITE A205, A A RANO PLAZA, ALONG CITY GATE, AIRPORT RD ABUJA.".toLowerCase(),
  },
  {
    id: 3,
    branch: "Turkey office",
    location: "Istanbul",
    address:
      "SUITE A205, A A RANO PLAZA, ALONG CITY GATE, AIRPORT RD ABUJA.".toLowerCase(),
  },
];

const ContactLegend = () => {
  return (
    <section id="address">
      <div className={`${utilStyles.container} ${utilStyles.mBlock}`}>
        <div>
          <div
            className={`${utilStyles.flex} ${styles.flex} ${utilStyles.headingLg} ${styles.mb1}`}
          >
            <h2>We are here for you</h2>
            <a className={styles.tel} href="tel:+2349039301500">
              +2349039301500
            </a>
          </div>
          <div className={`${utilStyles.gap1} ${styles.gap} ${styles.mb1}`}>
            {offices.map(({ id, branch, location, address }) => (
              <Address
                key={id}
                branch={branch}
                location={location}
                address={address}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLegend;
