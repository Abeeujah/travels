import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../../styles/utils.module.css";
import styles from "./Testimonial.module.css";
import Controls from "../controls/controls";
import TestimonialItem from "../testimonial-item/testimonial-item";
import Picture from "../../../public/images/str.webp";
import { useEffect, useState } from "react";
import gridCount from "@/utils/grid.utils";

const testimonies = [
  {
    id: 0,
    image: Picture,
    name: "Sherrif Adeshina",
    profession: "Architect",
    testimony: `I was able to attend a conference through their service, and 
    I was very impressed with their service. From the flight booking process 
    to the concierge services they offered, they were always helpful and efficient. 
    Overall, my trip was great, and I would definitely recommend their services to 
    anyone looking to book a trip.`,
  },
  {
    id: 1,
    image: Picture,
    name: "Toyosi Odukale",
    profession: "Student",
    testimony: `I am grateful to Naskaxe Travels for helping me process my study visa. 
    I was initially nervous about the process, but they made it easy and stress-free. 
    They were always available to answer my questions and provide me with the information 
    I needed. the quality of their service, was professional 
    and courteous.`,
  },
  {
    id: 2,
    image: Picture,
    name: "Mr & Mrs Fawaz Yusuf",
    profession: "Student",
    testimony: `I was very happy with my Hajj trip, which was made possible by Naskaxe Travels. 
    I was particularly impressed with the quality of the accommodation and transportation, and 
    the helpfulness of the staff making it enjoyable for my family and i. I would highly recommend 
    Naskaxe Travels to anyone planning a trip.`,
  },
  {
    id: 3,
    image: Picture,
    name: "Caleb David",
    profession: "Entrepreneur",
    testimony: `I've used Naskaxe Travels to process my business trips for the past few years. 
    I've been very happy with their service. They're always responsive to my needs, and they always 
    go the extra mile to make sure my trips are smooth and hassle-free. They've made my business 
    trips much easier and less stressful.`,
  },
  {
    id: 4,
    image: Picture,
    name: "Michael Arinze",
    profession: "Footballer",
    testimony: `I would like to thank Naskaxe Travels for their excellent service in helping me 
    with my football trials. They were very helpful and efficient in arranging my travel and 
    accommodation, and they made sure that I had everything I needed for my trip. I was very 
    impressed with the level of service I received.`,
  },
];

const Testimonial = () => {
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
      ? setFocus(testimonies.length - gridCount(screenWidth))
      : setFocus(focus - 1);
  const rightClick = () =>
    focus === testimonies.length - gridCount(screenWidth)
      ? setFocus(0)
      : setFocus(focus + 1);

  const comps = testimonies.map(
    ({ id, image, name, profession, testimony }) => (
      <TestimonialItem
        key={id}
        image={image}
        name={name}
        profession={profession}
        testimony={testimony}
      />
    )
  );

  return (
    <section id="testimonials">
      <div className={`${utilStyles.container} ${utilStyles.mBlock}`}>
        <div>
          <Controls
            head={"testimonials"}
            leftClick={leftClick}
            rightClick={rightClick}
          />
          <div className={`${styles.testimonies}`}>
            {comps
              .slice(focus, focus + gridCount(screenWidth))
              .map((comp) => comp)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
