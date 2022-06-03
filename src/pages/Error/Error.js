import React from "react";
import styles from './error.module.scss'
import { BiMessageRoundedError } from "react-icons/bi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className={styles.Error}>
      <BiMessageRoundedError size={100} color="red" />
      <h2>Oops! Error 404</h2>
      <button>
        <Link to={`/`} className={styles.Link}>Go Back Home</Link>
      </button>
    </section>
  );
};

export default Error;
