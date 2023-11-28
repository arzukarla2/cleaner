import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import Blog from "../components/Blog";
import Testimonial from "../components/Testimonial";
import FunFact from "../components/FunFact";
import Portfolio from "../components/Portfolio";
import TeamMembers from "../components/TeamMembers";
import Service from "../components/Service";
import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Navigation1 from "../components/Navigation1";
import styles from "./CleanexUITemplate.module.css";

const CleanexUITemplate = () => {
  return (
    <div className={styles.cleanexUiTemplate}>
      <img
        className={styles.cleanexUiTemplateChild}
        alt=""
        src="/undefined.png"
      />
      <img className={styles.icon} alt="" src="/undefined1.png" />
      <img
        className={styles.cleanexUiTemplateItem}
        alt=""
        src="/undefined2.png"
      />
      <Footer />
      <NewsLetter />
      <Blog />
      <Testimonial />
      <FunFact />
      <Portfolio />
      <TeamMembers />
      <Service />
      <AboutUs />
      <Feature />
      <Hero />
      <Navigation1 />
    </div>
  );
};

export default CleanexUITemplate;
