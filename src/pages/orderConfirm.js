import React, { useEffect, useContext } from 'react';
import * as styles from './CSS/accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import CartContext from '../context/CartContext';

const OrderConfirmPage = (props) => {

  const context = useContext(CartContext);
  
  let setCart;
  
  if (context) {
    ({ setCart } = context);
  }

  useEffect(() => {
    if (setCart) {
      // Clear the cart when the component mounts
      setCart([]);
    }
  }, []);

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Thank You!</h1>
          <p>
            We are now processing your order and will be in touch shortly. If you have any concerns, feel free
            to email us at customerservice@example.com
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Order Status'}
              icon={'delivery'}
              subtitle={'Check your order status'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Continue Shopping'}
              link={'/shop'}
            />

            <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Check out our FAQs page'}
              link={'/faq'}
            />

            <ActionCard
              title={'Contact Us'}
              icon={'phone'}
              subtitle={'Reach out to us'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
