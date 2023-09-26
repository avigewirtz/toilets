import React, { useState, useEffect } from 'react';
import loadGoogleMapsApi from './LoadGoogleMapsApi'; // Make sure to correct the file path
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import * as styles from './DeliveryAddress.module.css';

const DeliveryAddress = () => {
  const [address, setAddress] = useState('');

  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsApi('AIzaSyBIotM_2yXmbktjz5jXJZAIvTWaiV1LJDY').then((google) => {
      console.log("Google Maps API loaded:", google);
      setApiLoaded(true);
    }).catch((error) => {
      console.error("Failed to load Google Maps API:", error);
    });
  }, []);

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Coordinates', latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    apiLoaded && (
    <div className={styles.deliveryAddressContainer}>
      <h3>Delivery Address</h3>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                    key={index}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  ));

  
};

export default DeliveryAddress;
