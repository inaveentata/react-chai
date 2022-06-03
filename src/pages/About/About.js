import React from "react";
import styles from "./about.module.scss";
import AboutItem from "../../components/AboutItem/AboutItem";

const About = () => {
  return (
    <section>
        <AboutItem title={`Our story`} />
      <div className={`${styles.flex} ${styles.flex1}`}>
        <AboutItem title={`Our Promise`} />
        <AboutItem title={`What we do`} />
      </div>
      <div className={styles.flex}>
        <AboutItem title={`Our Quality`} />
        <AboutItem title={`Our Service`} />
      </div>
    </section>
  );
};

export default About;
