import React from "react";

import styles from "./card.module.scss";

function Card(props) {
  const { id, image, title, description, price, category, rating } = props;
  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <img src={image} alt={`card-${id}`} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.ctg}>{category}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}

export default Card;
