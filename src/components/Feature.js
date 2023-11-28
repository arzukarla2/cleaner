import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.trustedPartners}>TRUSTED PARTNERS</div>
      <b className={styles.brandsWhoTrust}>BRANDS WHO TRUST US</b>
      <div className={styles.featureChild} />
      <img className={styles.featureItem} alt="" src="/undefined37.png" />
    </div>
  );
};

export default Feature;
