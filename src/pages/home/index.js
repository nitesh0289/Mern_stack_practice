import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Carousel from "components/swiper";
import Card from "components/card";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchProducts() {
      fetch("https://fakestoreapi.com/products", { method: "GET" })
        .then((data) => data.json())
        .then((data) => {
          setProducts(data);
        });
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <section className={styles.swiper}>
        <Carousel />
      </section>
      <section className={styles.container}>
        {products.map((item, i) => (
          <Card
            id={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            image={item.image}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
