import React from 'react';
import AdjustItem from '../AdjustItem/AdjustItem';
import AddressInputSingleBox from '../RentalDates/RentalDates';
import * as styles from './DatesAndQuantity.module.css';

const CombinedComponent = ({ qty, setQty, isTransparent }) => {
  return (
    <div className={styles.root}>
      <AdjustItem qty={qty} setQty={setQty} isTransparent={isTransparent} />
      <AddressInputSingleBox />
    </div>
  );
};

export default CombinedComponent;
