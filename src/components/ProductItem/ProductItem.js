import React from "react";
import styles from "./productItem.module.scss";

const ProductItem = ({image, title}) => {
  return (
    <div className={styles.ProductItem}>
      <img src={image} alt={title} />
      <div className={styles.overlay}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
