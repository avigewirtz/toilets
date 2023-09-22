// import { Link, navigate } from 'gatsby';
// import React from 'react';

// import Button from '../Button';
// import CurrencyFormatter from '../CurrencyFormatter';
// import MiniCartItem from '../MiniCartItem';

// import * as styles from './MiniCart.module.css';

// const MiniCart = (props) => {
//   const sampleCartItem = {
//     image: '/products/pdp1.jpeg',
//     alt: '',
//     name: 'Lambswool Crew Neck Jumper',
//     price: 220,
//     color: 'Anthracite Melange',
//     size: 'xs',
//   };

//   return (
//     <div className={styles.root}>
//       <div className={styles.titleContainer}>
//         <h4>My Bag</h4>
//       </div>
//       <div className={styles.cartItemsContainer}>
//         <MiniCartItem {...sampleCartItem} />
//       </div>
//       <div className={styles.summaryContainer}>
//         <div className={styles.summaryContent}>
//           <div className={styles.totalContainer}>
//             <span>Total (USD)</span>
//             <span>
//               <CurrencyFormatter amount={220} appendZero />
//             </span>
//           </div>
//           <span className={styles.taxNotes}>
//             Taxes and shipping will be calculated at checkout
//           </span>
//           <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
//             checkout
//           </Button>
//           <div className={styles.linkContainer}>
//             <Link to={'/shop'}>continue shopping</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MiniCart;
import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import CartContext from '../../context/CartContext'; // Import CartContext
import MiniCartItem from '../MiniCartItem';
import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const cartContext = useContext(CartContext); // Use CartContext

  // Check if cartContext is defined and has a cart property
  if (!cartContext || !cartContext.cart) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>My Bag</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        {cartContext.cart.map((item, index) => (
          <MiniCartItem key={index} {...item} />
        ))}
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Total (USD)</span>
            <span>
              <CurrencyFormatter amount={calculateTotal(cartContext.cart)} appendZero />
            </span>
          </div>
          <span className={styles.taxNotes}>
            Taxes and shipping will be calculated at checkout
          </span>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            checkout
          </Button>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>continue shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to calculate the total price of items in the cart
const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price, 0);
};

export default MiniCart;
