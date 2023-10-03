import React from 'react';
import { Form, Button } from 'antd'; 
import { navigate } from 'gatsby'; 
import RentalDates from '../RentalDates/RentalDates';  
import DeliveryAddress from '../DeliveryAddress/DeliveryAddress';
import * as styles from './DatesAndAddress.module.css';

const DatesAndDelivery = () => {
  const [form] = Form.useForm();

  const handleDateChange = (dates) => {
    form.setFieldsValue({ rentalDateRange: dates });
  };

  const handleAddressChange = (address) => {
    form.setFieldsValue({ deliveryAddress: address });
  };

  const handleSearch = () => {
    form
      .validateFields()
      .then(() => {
        navigate('/shop'); 
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <Form form={form}>
      <div className={styles.inputContainer}>
        <Form.Item 
          name="rentalDateRange" 
          rules={[{ required: true, message: 'Please select the rental dates!' }]}
        >
          <RentalDates onDateChange={handleDateChange} />
        </Form.Item>
        <Form.Item 
          name="deliveryAddress" 
          rules={[{ required: true, message: 'Please input the delivery address!' }]}
        >
          <DeliveryAddress onAddressChange={handleAddressChange} />
        </Form.Item>
        <Button onClick={handleSearch}>Search</Button> 
      </div>
    </Form>
  );
};

export default DatesAndDelivery;
