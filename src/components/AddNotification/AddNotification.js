import { Link } from 'gatsby';
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext'; // Import CartContext
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';

import * as styles from './AddNotification.module.css';

const AddNotification = (props) => {
  const cartContext = useContext(CartContext); // Use CartContext
  const cart = cartContext?.cart; // Optional chaining just to be safe
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotif = ctxAddItemNotification.state?.open;
  const lastAddedItem = cartContext?.lastAddedItem; // Access lastAddedItem from CartContext
  const itemCount = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0; 
  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Item added to bag</span>
      </div>

      <div className={styles.newItemContainer}>
        { lastAddedItem && (
          <>
            <div className={styles.imageContainer}>
              <img alt={lastAddedItem.alt} src={lastAddedItem.image} />
            </div>
            <div className={styles.detailContainer}>
              <span className={styles.name}>{lastAddedItem.name}</span>
            </div>
          </>
        )}
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
        {`View my bag (${itemCount})`} {/* Display the number of items dynamically */} {/* You might also want to make this dynamic */}
        </Button>
        <Button level="primary" href="/cart">
          checkout
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>continue shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default AddNotification;
