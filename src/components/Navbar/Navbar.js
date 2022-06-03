import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { CgMenuRight } from "react-icons/cg";
import { GiCoffeeCup } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <NavLink to={`/`} className={styles.logoLink}>
              <GiCoffeeCup /> chai
            </NavLink>
          </div>
          <div className={styles.menu} onClick={() => setToggle(!toggle)}>
            <CgMenuRight />
          </div>
        </div>
        <div
          className={`${styles.navContainer} ${
            toggle ? styles.showContainer : null
          }`}
        >
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="about" className={styles.navLink}>
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="products" className={styles.navLink}>
                Products
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="contact" className={styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
