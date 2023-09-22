import React from 'react';
import * as styles from './CSS/faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Your Orders</span>
            <div className={styles.subSection}>
              <h3>Reservations and Deliveries</h3>
              <p>
                To review the status of your reservation, please visit the "My Orders"
                section of your account. You should receive an email notification when
                your porta potty is dispatched for delivery.
              </p>
              <p>
                We aim to dispatch all units within 48 hours of the confirmed reservation
                time. However, during peak seasons or events, deliveries may take longer.
              </p>
              <p>
                If you have questions about your order, please contact us at
                support@PortaPottyRental.com or call us on (555) 123-4567.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Returns & Exchanges</h3>
              <p>
                We accept cancellations and changes up to 24 hours before the scheduled
                delivery time. Please note that cancellations or changes within 24 hours
                may incur a fee.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Payment and Billing</span>
            <div className={styles.subSection}>
              <h3>Rental Rates</h3>
              <p>
                Our rental rates are competitive and are calculated based on the duration
                and type of unit rented. Discounts are available for long-term rentals.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Accepted Payment Methods</h3>
              <p>
                We accept all major credit and debit cards, as well as electronic bank
                transfers.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Suspect Fraud?</h3>
              <p>
                If you suspect a fraudulent transaction involving our services, please
                first contact your bank to secure your account, and then notify us at
                support@PortaPottyRental.com.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
