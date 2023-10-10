// import React, { useState, useEffect } from 'react';  
// import { Input } from 'antd';
// import * as styles from './DeliveryAddress.module.css';

// const DeliveryAddress = ({ onAddressChange }) => {
//   const [address, setAddress] = useState('');

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setAddress(inputValue);
//     localStorage.setItem('savedAddress', inputValue);
//     if (onAddressChange) {
//       onAddressChange(inputValue);
//     }
//   };

//   useEffect(() => {
//     const savedAddress = localStorage.getItem('savedAddress');
//     if (savedAddress) {
//       setAddress(savedAddress);
//       if (onAddressChange) {
//         onAddressChange(savedAddress);
//       }
//     }
//   }, [onAddressChange]);

//   return (
//     <div className={styles.root}>
//       <label className={styles.labelStyle}><b>Address</b></label>
//       <div className={styles.inputContainer}>
//         <Input 
//           placeholder="Enter event address" 
//           className={styles.transparentInput}
//           value={address}
//           onChange={handleInputChange}
//           size="large"
//         />
//       </div>
//     </div>
//   );
// };

// export default DeliveryAddress;
import React, { useState, useEffect } from 'react';  
import { Input } from 'antd';
import * as styles from './DeliveryAddress.module.css';
import axios from 'axios';

const DeliveryAddress = ({ onAddressChange }) => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);
    localStorage.setItem('savedAddress', inputValue);
    
    // Fetch suggestions from Netlify function
    if (inputValue) {
      try {
        const response = await axios.get(`/.netlify/functions/googleAutocomplete?input=${inputValue}`);
        if (response.data.predictions) {
          setSuggestions(response.data.predictions.map(item => item.description));
        }
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }

    if (onAddressChange) {
      onAddressChange(inputValue);
    }
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem('savedAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      if (onAddressChange) {
        onAddressChange(savedAddress);
      }
    }
  }, [onAddressChange]);

  return (
    <div className={styles.root}>
      <label className={styles.labelStyle} style={{ fontSize: '20px' }}>
    <b>Address</b>
</label>

      
      <div className={styles.inputContainer}>
        <Input 
          placeholder="Enter event address" 
          className={styles.transparentInput}
          value={address}
          onChange={handleInputChange}
          size="large"
        />
        {suggestions.length > 0 && (
          <div className={styles.suggestionsContainer}>
            {suggestions.map(suggestion => (
              <div 
                key={suggestion} 
                className={styles.suggestion} 
                onClick={() => {
                  setAddress(suggestion);
                  setSuggestions([]); // Clear suggestions once an option is chosen
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryAddress;
