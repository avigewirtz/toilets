// import React, { useState } from 'react';
// import { Link, navigate } from 'gatsby';

// import Button from '../Button';
// import CurrencyFormatter from '../CurrencyFormatter';

// import * as styles from './OrderSummary.module.css';

// const OrderSummary = (props) => {

//   return (
//     <div className={styles.root}>
//       <div className={styles.orderSummary}>
//         <span className={styles.title}>order summary</span>
//         <div className={styles.calculationContainer}>
//           <div className={styles.labelContainer}>
//             <span>Subtotal</span>
//             <span>
//               <CurrencyFormatter amount={440} appendZero />
//             </span>
//           </div>
//           <div className={styles.labelContainer}>
//             <span>Shipping</span>
//             <span>---</span>
//           </div>
//           <div className={styles.labelContainer}>
//             <span>Tax</span>
//             <span>
//               <CurrencyFormatter amount={0} appendZero />
//             </span>
//           </div>
//         </div>
      
//         <div className={styles.totalContainer}>
//           <span>Total: </span>
//           <span>
//             <CurrencyFormatter amount={440} appendZero />
//           </span>
//         </div>
//       </div>
//       <div className={styles.actionContainer}>
//         <Button
//           onClick={() => navigate('/orderConfirm')}
//           fullWidth
//           level={'primary'}
//         >
//           checkout
//         </Button>
//         <div className={styles.linkContainer}>
//           <Link to={'/shop'}>CONTINUE SHOPPING</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;
import React from 'react';
import { Link, navigate } from 'gatsby';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = ({ totalPrice }) => {

  // Here you can add logic for calculating tax, shipping etc.
  const tax = 0;

  const finalTotal = totalPrice + tax;

  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>Order Summary</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Subtotal</span>
            <span>
              <CurrencyFormatter amount={totalPrice} appendZero />
            </span>
          </div>
          {/* <div className={styles.labelContainer}>
            <span>Shipping</span>
            <span>
              <CurrencyFormatter amount={shipping} appendZero />
            </span>
          </div> */}
          <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={tax} appendZero />
            </span>
          </div>
        </div>
      
        <div className={styles.totalContainer}>
          <span>Total: </span>
          <span>
            <CurrencyFormatter amount={finalTotal} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <Button
          onClick={() => navigate('/orderConfirm')}
          fullWidth
          level={'primary'}
        >
          Checkout
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>CONTINUE SHOPPING</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
