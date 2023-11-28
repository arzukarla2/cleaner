import { useEffect } from "react";
import styles from "./Navigation1.module.css";

const Navigation1 = () => {
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
    <div className={styles.navigation}>
      <img className={styles.navigationChild} alt="" src="/undefined41.png" />
      <div className={styles.home}>HOME</div>
      <div className={styles.aboutUs}>ABOUT US</div>
      <div className={styles.services}>SERVICES</div>
      <div className={styles.blog}>BLOG</div>
      <div className={styles.contact}>CONTACT</div>
      <div className={styles.contact1}>CONTACT</div>
      <button className={styles.button} data-animate-on-scroll>
        <img className={styles.vectorIcon} alt="" src="/undefined42.png" />
        <div className={styles.bookSchedule} data-animate-on-scroll>
          Book Schedule
        </div>
      </button>
    </div>
  );
};

export default Navigation1;
