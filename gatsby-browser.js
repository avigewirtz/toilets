// import React from 'react';

// import { NotificationProvider } from './src/context/AddItemNotificationProvider';

// export const wrapRootElement = ({ element }) => (
//   <NotificationProvider>{element}</NotificationProvider>
// );


import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { CartProvider } from './src/context/CardContext'; // Import your CartProvider

export const wrapRootElement = ({ element }) => (
  <CartProvider>
  <NotificationProvider>
 
      {element}
  
  </NotificationProvider>
  </CartProvider>
);
