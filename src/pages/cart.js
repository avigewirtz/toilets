import React, { useContext } from 'react';
import { Link } from 'gatsby';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';

import CartContext from '../context/CartContext';  // Import CartContext

import * as styles from './CSS/cart.module.css';

const CartPage = (props) => {
  const cartContext = useContext(CartContext);  // Use CartContext

  if (!cartContext || !cartContext.cart) {
    // Handle the case where cartContext or cartContext.cart is undefined
    return (
      <div>
        <div className={styles.contentContainer}>
          <Container size={'large'} spacing={'min'}>
            <div className={styles.headerContainer}>
              <div className={styles.shoppingContainer}>
                <Link className={styles.shopLink} to={'/shop'}>
                  <Icon symbol={'arrow'}></Icon>
                  <span className={styles.continueShopping}>
                    Continue Shopping
                  </span>
                </Link>
              </div>
              <Brand />
              <div className={styles.loginContainer}>
                <Link to={'/login'}>Login</Link>
              </div>
            </div>
            <div className={styles.summaryContainer}>
              <h3>My Bag</h3>
              <div className={styles.cartContainer}>
                <p>Your cart is empty.</p>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continue Shopping
                </span>
              </Link>
            </div>
            <Brand />
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Login</Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>My Bag</h3>
            <div className={styles.cartContainer}>
              {cartContext.cart.length > 0 ? (
                cartContext.cart.map((item, index) => <CartItem key={index} {...item} />)
              ) : (
                <p>Your cart is empty.</p>
              )}
              <OrderSummary />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
