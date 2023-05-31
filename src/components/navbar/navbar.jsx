import { useState } from "react";

import Link from "next/link";
import styles from "./Navbar.module.css";
import Hamburger from "../hamburger/hamburger";
import utilStyles from "../../styles/utils.module.css";

const navLinks = [
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
  {
    id: 3,
    route: "contact",
  },
];

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => setIsCollapsed(!isCollapsed);

  const routeHandler = (route) => (route === "home" ? "/" : route);

  return (
    <header className={styles.header}>
      <div className={utilStyles.container}>
        <nav className={styles.navbar}>
          <Link className={styles.brand} href={"/"}>
            NaskaxeTravels
          </Link>
          <div onClick={handleClick} className={styles.burger}>
            <Hamburger />
          </div>
          <ul
            className={`${styles.navItems} ${isCollapsed && styles.collapsed}`}
          >
            {navLinks.map(({ id, route }) => (
              <li key={id} className={styles.navItem}>
                <Link
                  onClick={handleClick}
                  className={`${styles.navLink} ${utilStyles.textCapitalize}`}
                  href={routeHandler(route)}
                >
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
