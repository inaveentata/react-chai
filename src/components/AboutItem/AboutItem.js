import React from "react";
import styles from "./aboutItem.module.scss";

const AboutItem = ({ title }) => {
  return (
    <section className={styles.AboutItem}>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        fugiat excepturi consequuntur sit quae voluptatibus, illum corrupti ut
        dolorem perferendis ipsa voluptatum voluptatem iure totam? Ea esse
        adipisci nobis quis quos voluptates illum assumenda, sunt et iusto
        quidem dolor magni. At, nesciunt officia unde culpa est quidem
        recusandae veniam natus tempora ea maiores, enim quibusdam odio?
        Voluptatem perferendis optio quas. Nam deleniti placeat tempora
        consequatur error animi id quisquam, eos consequuntur perspiciatis
        cumque assumenda illum harum consectetur ut in adipisci, labore ullam.
        Provident placeat aspernatur aliquid facilis, laboriosam doloribus nihil
        delectus iusto deleniti, eum molestias, sit maiores! Expedita, laborum
        ullam!
      </p>
    </section>
  );
};

export default AboutItem;
