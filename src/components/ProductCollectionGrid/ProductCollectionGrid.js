import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/global_front.jpg'}
        title={'Standard'}
        text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/liberty_front.jpg'}
        title={'Wheelchair Accessible'}
        text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/highrise_front.jpg'}
        title={'Specialty'}
        text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/shower_open_front.jpg'}
        title={'Accessories'}
        text={'View All'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
