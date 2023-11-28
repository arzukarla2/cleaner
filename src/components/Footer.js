import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.background} />
        <div className={styles.servicesParent}>
          <div className={styles.services}>Services</div>
          <div className={styles.houseCleaning}>House Cleaning</div>
          <div className={styles.officeCleaning}>Office Cleaning</div>
          <div className={styles.windowCleaning}>Window Cleaning</div>
          <div className={styles.floorCleaning}>Floor Cleaning</div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.footerSectionChild} />
        <div className={styles.footerSectionItem} />
        <div className={styles.usefulLinksParent}>
          <div className={styles.services}>Useful Links</div>
          <label className={styles.homePage}>Home Page</label>
          <div className={styles.servicePage}>Service Page</div>
          <div className={styles.faqsPage}>FAQ’s Page</div>
          <label className={styles.contactUs}>Contact Us</label>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.contactParent}>
          <div className={styles.services}>Contact</div>
          <div className={styles.groupChild} />
          <div className={styles.parent}>
            <div className={styles.div}>(+021) 254 4458 187</div>
            <img
              className={styles.basephoneTelephoneIcon}
              alt=""
              src="/undefined3.png"
            />
          </div>
          <div className={styles.infoemailcomParent}>
            <div className={styles.div}>info@email.com</div>
            <img
              className={styles.basephoneTelephoneIcon}
              alt=""
              src="/undefined4.png"
            />
          </div>
          <div className={styles.kingstreateMailbourneParent}>
            <div className={styles.kingstreateMailbourne}>
              564 Kingstreate, Mailbourne
            </div>
            <img
              className={styles.basephoneTelephoneIcon}
              alt=""
              src="/undefined5.png"
            />
          </div>
        </div>
        <div className={styles.copyrightByCleanex}>
          Copyright by Cleanex @ 2023. All rights reserved
        </div>
        <div className={styles.ametMinimMollitNonDeseruntParent}>
          <label className={styles.ametMinimMollitContainer}>
            <span
              className={styles.ametMinimMollit}
            >{`Amet minim mollit non deserunt ullamc est sit aliqua dolor  amet sint. `}</span>
            <span className={styles.ametMinimMollit1}>
              Amet minim mollit non deserunt ullamco est sit aliqua.
            </span>
          </label>
          <a className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.facebookF1Icon}
              alt=""
              src="/undefined6.png"
            />
          </a>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <a className={styles.twitter1}>
              <img className={styles.vectorIcon} alt="" src="/undefined7.png" />
            </a>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <a className={styles.linkedinIn1}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/undefined8.png"
              />
            </a>
          </div>
          <img className={styles.groupIcon} alt="" src="/undefined9.png" />
          <a className={styles.groupParent}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleDiv} />
            </div>
            <img className={styles.vectorIcon2} alt="" src="/undefined10.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
