import styles from "./TeamMembers.module.css";

const TeamMembers = () => {
  return (
    <div className={styles.teamMembers}>
      <div className={styles.ourTeam}>OUR TEAM</div>
      <b className={styles.ourExpertTeam}>OUR EXPERT TEAM MEMBERS</b>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.devonLane}>Devon Lane</div>
        <div className={styles.windowCleaner}>Window Cleaner</div>
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/undefined31.png" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.ralphEdwards}>Ralph Edwards</div>
        <label className={styles.windowCleaner}>Commercial Cleaner</label>
        <div className={styles.groupItem} />
        <img className={styles.groupInner} alt="" src="/undefined32.png" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.bessieCooper}>Bessie Cooper</div>
        <div className={styles.floorCleaner}>Floor Cleaner</div>
        <div className={styles.groupChild3} />
      </div>
      <div className={styles.teamMembersChild} />
      <div className={styles.codyFisher}>Cody Fisher</div>
      <label className={styles.houseCleaner}>House Cleaner</label>
      <div className={styles.teamMembersItem} />
      <img
        className={styles.teamMembersInner}
        alt=""
        src="/rectangle-35@2x.png"
      />
      <div className={styles.teamMembersChild1} />
      <img className={styles.groupIcon} alt="" src="/undefined33.png" />
      <img
        className={styles.teamMembersChild2}
        alt=""
        src="/rectangle-32@2x.png"
      />
    </div>
  );
};

export default TeamMembers;
