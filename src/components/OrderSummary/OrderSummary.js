import React from 'react';
import { Link, navigate } from 'gatsby';
import { loadStripe } from "@stripe/stripe-js";

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const stripePromise = loadStripe("pk_test_51NuR0LB1tqdkd8USAw6zrStrwc6eqatngkXs7gRvXDg0spMy5EIOc8QS5HS5HonWZSBA3nvhMqXqG5rEVV3Csrfe00LngkOvTN");
const OrderSummary = ({ totalPrice }) => {
  const tax = 0;
  const delivery = 0;
  const finalTotal = totalPrice + tax + delivery;

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Fetch the session ID from our Netlify Function
    const session = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: finalTotal * 100, // Convert to cents
      }),
    }).then((res) => res.json());

    if (session && session.sessionId) {
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });
    // Redirect to Stripe Checkout
  } else {
    console.error("Invalid session data:", session);
  }

    if (result.error) {
      // Handle error here
      console.error(result.error.message);
    }
  };
  

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
          <div className={styles.labelContainer}>
            <span>Delivery</span>
            <span>
              <CurrencyFormatter amount={delivery} appendZero />
            </span>
          </div>
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
        {/* <Button
          onClick={() => navigate('/orderConfirm')}
          fullWidth
          level={'primary'}
        > */}
         <Button onClick={handleCheckout} fullWidth level={"primary"}>
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
