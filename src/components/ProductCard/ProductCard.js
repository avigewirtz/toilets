import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';

import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {
  
  const {
    image,
    imageAlt,
    name,
    price,
    originalPrice,
    meta,
    showQuickView,
    height = 580,
  } = props;

  const handleRouteToProduct = () => {
    navigate(`/product/${name}`);
  };

  const handleQuickView = (e) => {
    e.stopPropagation();
    showQuickView();
  };


  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role={'presentation'}
      >
        <img style={{ height: `${height}px` }} src={image} alt={imageAlt}></img>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.prices}>
          <span
            className={`${originalPrice !== undefined ? styles.salePrice : ''}`}
          >
            <CurrencyFormatter amount={price}></CurrencyFormatter>
            {' '}/ day
          </span>
          {originalPrice && (
            <span className={styles.originalPrice}>
              <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
              {' '}/ day
            </span>
          )}
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default ProductCard;
