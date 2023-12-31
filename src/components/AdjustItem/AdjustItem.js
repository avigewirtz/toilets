import React from 'react';
import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = ({ qty, setQty, isTransparent }) => {  // Add qty and setQty to props

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setQty(num);  // Use setQty from props
  };

  return (
    <div
      className={`${styles.root} ${
        isTransparent === true ? styles.transparent : ''
      }`}
    >
      <div
        className={styles.iconContainer}
        role={'presentation'}
        onClick={() => {
          if (qty <= 1) return;
          setQty(qty - 1);  // Use setQty from props
        }}
      >
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${isTransparent === true ? styles.transparentInput : ''}`}
          onChange={(e) => handleOnChange(e)}
          type={'number'}
          value={qty}  // Use qty from props
        ></input>
      </div>
      <div
        role={'presentation'}
        onClick={() => setQty(qty + 1)}  // Use setQty from props
        className={styles.iconContainer}
      >
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;