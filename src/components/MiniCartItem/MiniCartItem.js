import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';
import CartContext from '../../context/CartContext';
import * as styles from './MiniCartItem.module.css';

const MiniCartItem = (props) => {
  const { image, alt, name, price, id } = props;
  const { removeFromCart, adjustQuantity, cart } = useContext(CartContext);

  const handleRemoveClick = () => {
    console.log('Remove button clicked for item:', name, 'with ID:', id);
    removeFromCart(id);
  };

  const currentItem = cart.find(item => item.id === id);
  const currentQuantity = currentItem ? currentItem.quantity : 0;
  
  const { rentalDateRange, numberOfDays } = currentItem || {};
  const totalPrice = price * numberOfDays;

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/${encodeURIComponent(name)}`)}
      >
        <img src={image} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          
          {/* Additional Information */}
          {/* <span>Dates: {rentalDateRange ? `${rentalDateRange[0]}  -  ${rentalDateRange[1]}` : "Not set"}</span> */}
          <span>Total rental days: {numberOfDays || "Not set"}</span>

          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price} />
            {' '}/ day
          </div>
          <div className={styles.priceContainer}>
          Total Price:
            <CurrencyFormatter amount={totalPrice} />
          
          </div>
        </div>
        <div className={styles.adjustItemContainer}>
          <AdjustItem 
            qty={currentQuantity} 
            setQty={(newQuantity) => adjustQuantity(id, newQuantity)}
          />
        </div>
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem onRemove={handleRemoveClick} />
      </div>
    </div>
  );
};

export default MiniCartItem;
