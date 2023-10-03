import React, { useContext, useState } from 'react';
import { Form } from 'antd';
import * as styles from '../CSS/productsample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
import Layout from '../../components/Layout/Layout';
import RentalDates from '../../components/RentalDates';
import { generateMockProductData } from '../../helpers/mock';
import ProductCardGrid from '../../components/ProductCardGrid';
import CartContext from '../../context/CartContext';
import DeliveryAddress from '../../components/DeliveryAddress';
import AddItemNotificationContext from '../../context/AddItemNotificationProvider';
import ProductFAQ from '../../components/productFAQ/productFAQ';

const ProductPage = (props) => {
  const [form] = Form.useForm();
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const showNotification = ctxAddItemNotification.showNotification;
  const sampleProduct = generateMockProductData(1, 'fresh-start-shower')[0];
  const cartContext = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const allSuggestions = generateMockProductData(5, 'Standard');
  const suggestions = allSuggestions.filter(product => !product.tags.includes('global'));

  const calculateNumberOfDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;
    return days;
  };

  const handleAddToCartClick = () => {
    form.validateFields()
      .then(values => {
        const numericQty = Number(values.quantity);
        const numberOfDays = calculateNumberOfDays(values.rentalDateRange[0], values.rentalDateRange[1]);
        cartContext.addToCart(sampleProduct, numericQty, values.rentalDateRange, values.deliveryAddress, numberOfDays);
        showNotification();
      })
      .catch(errorInfo => {
        // Handle validation errors here, if needed
      });
  };

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
                {' '}/ day
              </div>
              <Form form={form}>

               <div className={styles.flexContainer}>
      <Form.Item 
        name="rentalDateRange"
        className={styles.rentalDatesContainer} 
        rules={[{ required: true, message: 'Please select rental dates.' }]}
      >
        <RentalDates onDateChange={(dates) => form.setFieldsValue({ rentalDateRange: dates })} />
      </Form.Item>

      <div className={styles.quantityContainer}> 
        <span className={styles.quantityLabel}>Quantity</span>
        <Form.Item
          name="quantity"
          initialValue={1}
        >
          <AdjustItem qty={qty} setQty={(newQty) => { 
            setQty(newQty);
            form.setFieldsValue({ quantity: newQty });
          }} />
        </Form.Item>
      </div>
      
    </div>

                <Form.Item
                  name="deliveryAddress"
                  rules={[{ required: true, message: 'Please enter a delivery address.' }]}
                >
                  <DeliveryAddress onAddressChange={(address) => form.setFieldsValue({ deliveryAddress: address })} />
                </Form.Item>

                {/* <Form.Item
                  name="quantity"
                  initialValue={1}
                >
                  <AdjustItem qty={qty} setQty={(newQty) => { 
                    setQty(newQty);
                    form.setFieldsValue({ quantity: newQty });
                  }} />
                </Form.Item> */}

                <div className={styles.actionContainer}>
                  <div className={styles.addToButtonContainer}>
                    <Button
                      onClick={handleAddToCartClick}
                      fullWidth
                      level={'primary'}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Form>
              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
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
          
     {/* FAQ */}
     <div className={styles.faqContainer}>
     <ProductFAQ
  bgColor="var(--standard-light-grey)"
  title="FAQ"
  steps={[
    "How does the new impact base benefit the user?: The new impact base features an open grid floor design. This design allows three times more fresh air to circulate throughout the restroom, providing a more comfortable experience for users.",
    "Can I get a porta potty with a smooth floor?: Yes, the Global porta potty comes with a smooth floor cover for special instances where a smooth floor is preferred or required.",
    "How does the Global porta potty help prevent the spread of germs?: The restroom is designed with a large door latch that can be operated with the elbow rather than by hand. Additionally, there's a “hover handle” inside the door for those who prefer not to sit directly on the seat.",
    "Is the Global porta potty durable even though it's cost-effective?: Absolutely! Despite its lower initial investment, the Global porta potty boasts a robust framework with a one-piece continuous door frame. Its side panel thickness has also been increased by 12%, making it sturdy and long-lasting.",
    "What are the dimensions of the Global porta potty?: The porta potty measures 90\" in height, 44\" in width, and 48\" in depth. The door opening is 72\” x 24\”, and it offers a floor area of 840 in².",
    "What is the tank volume of the porta potty?: The tank can hold up to 70 gallons (265L) of waste.",
    "How much does the Global porta potty weigh?: The porta potty weighs approximately 170 lbs (77 kg)."
  ]}
/>
  </div>
          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={350}
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
