import React, { useState } from 'react';
import { Radio, Input } from 'antd';
import Button from '../Button';
import { navigate } from 'gatsby';

const QuoteForm = () => {
  const [service, setService] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div style={{ padding: '20px', background: 'rgba(255, 165, 0, 0.85)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '10px' }}>Select your service</div>
      <Radio.Group 
        onChange={(e) => setService(e.target.value)} 
        value={service}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}
      >
        <Radio value="portaPotty">Porta Potty</Radio>
        <Radio value="restroomTrailer">Restroom Trailer</Radio>
        <Radio value="showerTrailer">Shower Trailer</Radio>
        <Radio value="handWashingStation">Hand Washing Station</Radio>
      </Radio.Group>

      <Input 
        placeholder="Where do you need your trailer?" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        style={{ marginBottom: '20px' }}
      />

<div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={() => navigate('/shop')} level={'primary'}>
          Explore Options
        </Button>
      </div>
    </div>
  );
};

export default QuoteForm;