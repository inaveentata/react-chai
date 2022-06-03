import React from "react";
import HomeItem from "../../components/HomeItem/HomeItem";
import styles from "./home.module.scss";
import hero from "../../Images/home-hero.jpg";
import masalaTea from "../../Images/masalatea.jpg";
import tandooriTea from "../../Images/tandooriTea.jpg";
import iraniTea from "../../Images/iraniTea.jpg";

const Home = () => { 
  return (
    <section className={styles.home}>
      <div className={styles.heroContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${hero})` }}
        >
          {/* <img src={hero} alt="tea" /> */}
        </div>
        <div className={styles.textInfo}>
          <h2>
            Once taste it... <br /> You won't leave it
          </h2>
        </div>
      </div>
      <div className={styles.specials}>
        <h2>Today's special</h2>
        <div className={styles.specialsContainer}>
          <HomeItem title={`Masala Tea`} image={masalaTea} />
          <HomeItem title={`Tandoori Tea`} image={tandooriTea} />
          <HomeItem title={`Irani Tea`} image={iraniTea} />
        </div>
      </div>
    </section>
  );
};

export default Home;
