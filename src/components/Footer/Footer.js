import React from "react";
import styles from "./footer.module.scss";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <address>
        <p>Flat no: 123</p>
        <p>xyz street</p>
        <p>Beside the great park</p>
        <p>Tel: 1-231-4563</p>
        <p>abc@gmail.com</p>
      </address>
      <div className={styles.socialLinks}>
        <ul>
          <li >
            <span className={styles.twitter}>
              <FaTwitter />
            </span>{" "}
            twitter
          </li>
          <li>
            <span className={styles.facebook}>
              <BsFacebook />
            </span>{" "}
            facebook
          </li>
          <li>
            <span className={styles.linkdin}>
              <AiFillLinkedin />
            </span>{" "}
            LinkdIn
          </li>
          <li>
            <span className={styles.youtube}>
              <AiFillYoutube />
            </span>{" "}
            Youtube
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
