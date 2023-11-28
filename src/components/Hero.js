import { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.hero}>
      <button
        className={styles.button2}
        autoFocus={true}
        data-animate-on-scroll
      >
        <a className={styles.getAQuote}>Get a Quote</a>
      </button>
      <div className={styles.highlyProfessionalCleaning}>
        HIGHLY PROFESSIONAL CLEANING
      </div>
      <b className={styles.easyToCleanContainer}>
        <p className={styles.easyToClean}>EASY TO CLEAN</p>
        <p className={styles.houseAndOffice}>HOUSE AND OFFICE</p>
      </b>
      <div className={styles.ametMinimMollit}>
        Amet minim mollit non deserunt ullamco sit aliqua dolor do amet sint.
        Velit officia enim velit mollit. Exercitation veniam consequat sunt
        nostrud amet.
      </div>
      <img
        className={styles.pngegg20221231t1232051}
        alt=""
        src="/undefined38.png"
      />
      <img className={styles.heroChild} alt="" src="/undefined39.png" />
      <img className={styles.heroItem} alt="" src="/undefined40.png" />
    </div>
  );
};

export default Hero;
