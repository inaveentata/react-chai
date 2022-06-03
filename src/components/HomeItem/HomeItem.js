import React from "react";
import styles from "./homeItem.module.scss";

const HomeItem = ({title,image}) => {
  return (
    <div className={styles.HomeItem}>
      <div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
        nam ad fugit minus nemo, rerum repudiandae perspiciatis cum ducimus
        corrupti qui tempore iure fuga dolor harum excepturi officiis rem
        aliquam!
      </p>
    </div>
  );
};

export default HomeItem;
