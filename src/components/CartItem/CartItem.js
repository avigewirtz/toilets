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
  const { image, alt, name, price, id } = props;  // Removed color and size

  const currentItem = cart.find(item => item.id === id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;
  const handleRemoveClick = () => {
    console.log('Remove button clicked for item:', name, 'with ID:', id);
    removeFromCart(id);
  };
  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/${encodeURIComponent(name)}`)}
        // Navigate based on product name
      >
        <img src={image} alt={alt}></img>
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        {/* Removed metaContainer for color and size */}
      </div>
      <div
        className={styles.editContainer}
        role={'presentation'}
        onClick={() => setShowQuickView(true)}
      >
        {/* <span>Edit</span> */}
      </div>
      <div className={styles.adjustItemContainer}>
        <AdjustItem qty={currentQuantity} setQty={(newQuantity) => adjustQuantity(id, newQuantity)} />
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price} appendZero />
      </div>
      <div className={styles.removeContainer}>
      <RemoveItem onRemove={handleRemoveClick} />
      </div>
      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};


export default CartItem;
