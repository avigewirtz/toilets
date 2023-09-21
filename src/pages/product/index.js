import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const ProductIndexPage = () => {
  useEffect(() => {
    // Redirect to the /product/sample path
    navigate('/product/Global/');
  }, []);

  return <React.Fragment />;
};

export default ProductIndexPage;
