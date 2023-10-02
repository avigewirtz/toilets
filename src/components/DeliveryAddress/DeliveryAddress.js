import React, { useState } from 'react';
import { Input } from 'antd';
import * as styles from './DeliveryAddress.module.css';

const AddressInputSingleBox = ({ onAddressChange }) => {
  const [address, setAddress] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);

    // Pass the updated address value to the parent component
    if (onAddressChange) {
      onAddressChange(inputValue);
    }
  };

  return (
    <div className={styles.root}>
      <label className={styles.labelStyle}>Address</label>
      <div className={styles.inputContainer}>
        <Input 
          placeholder="Enter event address" 
          className={styles.transparentInput}
          value={address}
          onChange={handleInputChange} // Update input with the value
          size="large" // Increase the size of the input
        />
      </div>
    </div>
  );
};

export default AddressInputSingleBox;
