import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <button className={styles.button3} autoFocus={true}>
        <div className={styles.ourServices}>Our Services</div>
      </button>
      <div className={styles.ametMinimMollit}>
        Amet minim mollit non deserunt ullamco sit aliqua dolor do consequat
        sunt nostrud amet. Amet minim mollit non deserunt ullamco aliqua dolo
        ame.
      </div>
      <div className={styles.ametMinimMollit1}>
        Amet minim mollit non sit aliqua dolor do consequat sunt nostrud amet.
        Amet mollit ullamco aliqua dolo ame.
      </div>
      <div className={styles.aboutUs1}>ABOUT US</div>
      <div className={styles.awardWinningCompany}>AWARD WINNING COMPANY</div>
      <b className={styles.quicklyAndEasyContainer}>
        <p className={styles.quicklyAndEasy}>QUICKLY AND EASY TO CLEAN</p>
        <p className={styles.quicklyAndEasy}>YOUR OFFICE AND HOUSE</p>
      </b>
      <img className={styles.aboutUsChild} alt="" src="/rectangle-8@2x.png" />
      <img className={styles.aboutUsItem} alt="" src="/rectangle-11@2x.png" />
      <img className={styles.aboutUsInner} alt="" src="/rectangle-9@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10@2x.png" />
      <img className={styles.vectorIcon} alt="" src="/undefined36.png" />
    </div>
  );
};

export default AboutUs;
