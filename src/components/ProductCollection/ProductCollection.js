import { navigate } from 'gatsby';
import React from 'react';
import * as styles from './ProductCollection.module.css';

const ProductCollection = (props) => {
  const { image, title, text, link } = props;

  return (
    <div
      role={'presentation'}
      onClick={() => navigate(link)}
      className={styles.root}
    >
      <img src={image} alt={title} className={styles.productImage} />
      <span className={styles.title}>{title}</span>
      <div className={styles.content}>
        <span className={styles.text}>{text}</span>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default ProductCollection;
