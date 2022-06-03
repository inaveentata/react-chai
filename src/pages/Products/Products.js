import React from "react";
import styles from "./product.module.scss";
import ProductItem from "../../components/ProductItem/ProductItem";
import GreenTea from "../../Images/Products/greenTea.jpg";
import ButterTea from "../../Images/Products/butterTea.jpg";
import KashmiriKehava from "../../Images/Products/kashmiriKehava.jpg";
import NoonTea from "../../Images/Products/Noonchai.jpg";
import NilgiriTea from "../../Images/Products/NilgiriTea.jpg";
import DarjeelingTea from "../../Images/Products/DarjeelingTea.jpg";

const Products = () => {
  return (
    <section className={styles.Products}>
      <h1>Our Products</h1>
      <div className={styles.ProductsContainer}>
        <ProductItem image={GreenTea} title={`Green Tea`} />
        <ProductItem image={ButterTea} title={`Butter Tea`} />
        <ProductItem image={KashmiriKehava} title={`Kashmiri Kehava`} />
        <ProductItem image={NoonTea} title={`Noon Tea`} />
        <ProductItem image={NilgiriTea} title={`Nilgiri Tea`} />
        <ProductItem image={DarjeelingTea} title={`Darjeeling Tea`} />
      </div>
    </section>
  );
};

export default Products;
