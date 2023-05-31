import Link from "next/link";

import styles from "./Footer.module.css";
import utilStyles from "../../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const aboutLinks = [
  {
    id: 0,
    route: "home",
  },
  {
    id: 1,
    route: "about",
  },
  {
    id: 2,
    route: "services",
  },
];
const servicesLinks = [
  {
    id: 0,
    route: "services",
  },
  {
    id: 1,
    route: "about",
  },
  {
    id: 2,
    route: "contact",
  },
];
const socialLinks = [
  {
    id: 0,
    icon: faFacebook,
    route: "https://web.facebook.com/naskaxeproperty",
  },
  {
    id: 1,
    icon: faLinkedin,
    route: "https://www.linkedin.com/in/naskaxe-travels-402143273/",
  },
  {
    id: 2,
    icon: faTwitter,
    route: "https://twitter.com/TravelnaskaxeCO",
  },
];

const routeHandler = (route) => (route === "home" ? "/" : route);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${utilStyles.blackBg} ${utilStyles.colorWhite} ${styles.pb1}`}
    >
      <div className={utilStyles.container}>
        <div className={styles.footerContainer}>
          <div
            className={`${styles.mbChildren} ${styles.brand} ${utilStyles.textCenter} ${styles.textStart}`}
          >
            <p
              className={`${utilStyles.textUpperCase} ${utilStyles.headingXl} ${styles.mbEnd}`}
            >
              Naskaxe Travels
            </p>
            <p className={`${utilStyles.textCapitalize} ${styles.brandText}`}>
              Travel is the only place where you can spend money and make
              memories.
            </p>
          </div>
          <div className={`${utilStyles.textCenter} ${styles.mbChildren}`}>
            <p
              className={`${utilStyles.headingMd} ${utilStyles.textCapitalize}`}
            >
              about
            </p>
            <ul>
              {aboutLinks.map(({ id, route }) => (
                <li
                  key={id}
                  className={`${utilStyles.list} ${styles.footItem}`}
                >
                  <Link
                    className={`${styles.footLink} ${utilStyles.textCapitalize}`}
                    key={id}
                    href={routeHandler(route)}
                  >
                    {route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${utilStyles.textCenter} ${styles.mbChildren}`}>
            <p
              className={`${utilStyles.textCapitalize} ${utilStyles.headingMd}`}
            >
              services
            </p>
            <ul>
              {servicesLinks.map(({ id, route }) => (
                <li
                  key={id}
                  className={`${utilStyles.list} ${styles.footItem}`}
                >
                  <Link
                    className={`${styles.footLink} ${utilStyles.textCapitalize}`}
                    key={id}
                    href={routeHandler(route)}
                  >
                    {route}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className={utilStyles.colorBlack} />
        <div className={styles.copyright}>
          <p>&copy;{year} Naskaxe Travels</p>
          <ul className={styles.brandIcons}>
            {socialLinks.map(({ id, icon, route }) => (
              <li className={`${styles.inBlock} ${utilStyles.list}`} key={id}>
                <a className={styles.inBlock} target="_blank" href={route}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
