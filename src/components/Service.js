import { useEffect } from "react";
import styles from "./Service.module.css";

const Service = () => {
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
    <div className={styles.service}>
      <div className={styles.ourServices}>OUR SERVICES</div>
      <b className={styles.whatWeAre}>WHAT WE ARE OFFERING</b>
      <div className={styles.serviceChild} />
      <div className={styles.serviceItem} />
      <div className={styles.serviceInner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.ellipseIcon} alt="" src="/undefined34.png" />
      <img className={styles.serviceChild1} alt="" src="/undefined35.png" />
      <img className={styles.serviceChild2} alt="" src="/undefined34.png" />
      <img className={styles.serviceChild3} alt="" src="/undefined34.png" />
      <label className={styles.houseCleaning}>house Cleaning</label>
      <div className={styles.officeCleaning}>Office Cleaning</div>
      <label className={styles.floorCleaning}>Floor Cleaning</label>
      <div className={styles.windowCleaning}>Window Cleaning</div>
      <div className={styles.ametMinimMollit}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div className={styles.ametMinimMollit1}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div className={styles.ametMinimMollit2}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div className={styles.ametMinimMollit3}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <img className={styles.groupIcon} alt="" src="/group-38.svg" />
      <img
        className={styles.serviceChild4}
        loading="eager"
        alt=""
        src="/group-37.svg"
      />
      <img
        className={styles.serviceChild5}
        loading="lazy"
        alt=""
        src="/group-35.svg"
      />
      <img
        className={styles.serviceChild6}
        loading="lazy"
        alt=""
        src="/group-36.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default Service;
