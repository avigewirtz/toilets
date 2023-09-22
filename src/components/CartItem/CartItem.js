import React, { useState, useContext } from 'react';
import CartContext from '../../context/CartContext'; // Import the CartContext

import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
import QuickView from '../QuickView';
import { navigate } from 'gatsby';

import * as styles from './CartItem.module.css';

const CartItem = (props) => {
  const { removeFromCart, adjustQuantity, cart } = useContext(CartContext);
  const [showQuickView, setShowQuickView] = useState(false);
  const { image, alt, color, name, size, price, id } = props;

  const currentItem = cart.find(item => item.id === id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate('/product/Global')}
      >
        <img src={image} alt={alt}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>
        <div
          className={styles.editContainer}
          role={'presentation'}
          onClick={() => setShowQuickView(true)}
        >
          <span>Edit</span>
        </div>
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem qty={currentQuantity} setQty={(newQuantity) => adjustQuantity(id, newQuantity)} />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem onRemove={() => removeFromCart(id)} />
      </div>
      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default CartItem;
