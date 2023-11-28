import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Radio } from "antd";
import { Form } from "react-bootstrap";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.ourPortfolio}>OUR PORTFOLIO</h2>
      <b className={styles.recentWorkShowcase}>RECENT WORK SHOWCASE</b>
      <img
        className={styles.portfolioChild}
        alt=""
        src="/rectangle-37@2x.png"
      />
      <img className={styles.portfolioItem} alt="" src="/rectangle-39@2x.png" />
      <img
        className={styles.portfolioInner}
        loading="lazy"
        alt=""
        src="/rectangle-38@2x.png"
      />
      <div className={styles.rectangleDiv} />
      <div className={styles.corporateVehicleCleaning}>
        Corporate Vehicle Cleaning
      </div>
      <div className={styles.professionalCleaner}>Professional Cleaner</div>
      <img className={styles.vectorIcon} alt="" src="/undefined30.png" />
      <img className={styles.groupIcon} alt="" src="/undefined18.png" />
      <input className={styles.ellipseInput} type="radio" />
      <img className={styles.ellipseIcon} alt="" src="/undefined19.png" />
      <Form.Check className={styles.ellipseFormcheck} type="radio" />
      <img className={styles.portfolioChild1} alt="" src="/undefined19.png" />
    </div>
  );
};

export default Portfolio;
