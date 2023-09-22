// import React from 'react';

// import { NotificationProvider } from './src/context/AddItemNotificationProvider';

// export const wrapRootElement = ({ element }) => (
//   <NotificationProvider>{element}</NotificationProvider>
// );


import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { CartProvider } from './src/context/CartContext'; // Import your CartProvider

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>
    <CartProvider>
      {element}
    </CartProvider>
  </NotificationProvider>
);
