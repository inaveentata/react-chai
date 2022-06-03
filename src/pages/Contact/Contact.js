import React from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" /> <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" /> <br />
        <label htmlFor="textbox">Reasons for Contacting</label>
        <textarea
          name="textbox"
          id="textbox"
          cols="30"
          rows="10"
          placeholder="Start type over here..."
        />
      </form>
      <button>Send</button>
    </section>
  );
};

export default Contact;
