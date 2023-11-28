import styles from "./FunFact.module.css";

const FunFact = () => {
  return (
    <div className={styles.funFact}>
      <div className={styles.funFactChild} />
      <div className={styles.groupParent}>
        <div className={styles.groupGroup}>
          <img className={styles.groupIcon} alt="" src="/undefined26.png" />
          <div className={styles.parent}>
            <b className={styles.b}>48</b>
            <div className={styles.teamMembers}>Team Members</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <img className={styles.groupIcon1} alt="" src="/undefined27.png" />
          <div className={styles.group}>
            <b className={styles.b}>26</b>
            <div className={styles.teamMembers}>Award Winning</div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupIcon2} alt="" src="/undefined28.png" />
          <div className={styles.container}>
            <b className={styles.b}>759+</b>
            <div className={styles.teamMembers}>Project Complete</div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.groupWrapper}>
            <div className={styles.parent1}>
              <b className={styles.b}>567+</b>
              <div className={styles.teamMembers}>Happy Customers</div>
            </div>
          </div>
          <img className={styles.groupIcon3} alt="" src="/undefined29.png" />
        </div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
    </div>
  );
};

export default FunFact;
