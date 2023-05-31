import { useEffect, useState } from "react";
import styles from "./Portfolio.module.css";
import utilStyles from "../../styles/utils.module.css";
import PortfolioItem from "../portfolio-item/portfolio-item";
import Controls from "../controls/controls";
import Paris from "../../../public/images/Paris.webp";
import Dubai from "../../../public/images/Dubai.webp";
import Santorini from "../../../public/images/Santorini.webp";
import Toronto from "../../../public/images/Toronto.webp";
import Rome from "../../../public/images/Rome.webp";
import Maldives from "../../../public/images/Maldives.webp";

const gridCount = (width) => {
  if (width < 760) {
    return 1;
  } else if (width < 1001) {
    return 2;
  } else {
    return 4;
  }
};

const items = [
  {
    id: 0,
    picture: Maldives,
    location: `maldives`,
  },
  {
    id: 1,
    picture: Santorini,
    location: `Santorini`,
  },
  {
    id: 2,
    picture: Rome,
    location: `rome`,
  },
  {
    id: 3,
    picture: Dubai,
    location: `dubai`,
  },
  {
    id: 4,
    picture: Toronto,
    location: `Toronto`,
  },
  {
    id: 5,
    picture: Paris,
    location: `paris`,
  },
];

const Portfolio = () => {
  const [focus, setFocus] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.screen.width);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftClick = () =>
    focus === 0
      ? setFocus(items.length - gridCount(screenWidth))
      : setFocus(focus - 1);
  const rightClick = () =>
    focus === items.length - gridCount(screenWidth)
      ? setFocus(0)
      : setFocus(focus + 1);

  const ports = items.map((item) => (
    <PortfolioItem key={item.id} destination={item} />
  ));
  return (
    <section
      id="portfolio"
      className={`${utilStyles.whiteBg} ${utilStyles.colorBlack}`}
    >
      <div className={`${styles.pb2} ${styles.marBlock}`}>
        <div className={`${utilStyles.container}`}>
          <Controls
            head={"popular places"}
            leftClick={leftClick}
            rightClick={rightClick}
          />
          <div className={`${styles.items} ${utilStyles.gap1}`}>
            {ports
              .slice(focus, focus + gridCount(screenWidth))
              .map((comp) => comp)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
