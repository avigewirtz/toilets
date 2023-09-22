import React, { useState, useContext } from 'react';
import * as styles from '../CSS/productsample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import ProductCardGrid from '../../components/ProductCardGrid';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'poly-mini')[0];

  const [qty, setQty] = useState(0);
  // below is the 4 product suggestions used
  const suggestions = generateMockProductData(4, 'Specialty');

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: 'Porta Potties', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={sampleProduct.gallery} />
            </div>
            <div className={styles.details}>
              <h1>{sampleProduct.name}</h1>


              <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={sampleProduct.price} />
              </div>

    

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                  >
                    Add to Cart
                  </Button>
                </div>
           
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                {/* <span>Product code: {sampleProduct.productCode}</span> */}
              </div>

              <div className={styles.informationContainer}>
              <Accordion
  type={'plus'}
  customStyle={styles}
  title={'Features'}
>
  <ul className={styles.featuresList}>
    {sampleProduct.Features.map((feature, index) => (
      <li key={index}>{feature}</li>
    ))}
  </ul>
</Accordion>

<Accordion
  type={'plus'}
  customStyle={styles}
  title={'Specifications'}
>
  <ul className={styles.information}>
    {Object.keys(sampleProduct.Specifications).map((key, index) => (
      <li key={index}>
        <strong>{key}:</strong> {sampleProduct.Specifications[key]}
      </li>
    ))}
  </ul>
</Accordion>
              
              </div>
            </div>
          </div>
          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductPage;
