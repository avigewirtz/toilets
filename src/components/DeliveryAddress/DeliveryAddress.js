import React, { useState, useEffect } from 'react';  
import { Input } from 'antd';
import * as styles from './DeliveryAddress.module.css';

const DeliveryAddress = ({ onAddressChange }) => {
  const [address, setAddress] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);
    localStorage.setItem('savedAddress', inputValue);
    if (onAddressChange) {
      onAddressChange(inputValue);
    }
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem('savedAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      if (onAddressChange) {
        onAddressChange(savedAddress);
      }
    }
  }, [onAddressChange]);

  return (
    <div className={styles.root}>
      <label className={styles.labelStyle}><b>Address</b></label>
      <div className={styles.inputContainer}>
        <Input 
          placeholder="Enter event address" 
          className={styles.transparentInput}
          value={address}
          onChange={handleInputChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default DeliveryAddress;
