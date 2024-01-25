import React from "react";

import styles from "./card.module.scss";

function Card(props) {
  const { id, image, title, description, price, category, rating } = props;
  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <img src={image} alt={`card-${id}`} width="360px" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <b>{category}</b>
      </div>
    </article>
  );
}

export default Card;
