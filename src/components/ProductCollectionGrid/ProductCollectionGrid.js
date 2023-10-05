import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        // image={'/collections/global_front.jpg'}
        title={'Construction Sites'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/liberty_front.jpg'}
        title={'Festivals & Concerts'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/highrise_front.jpg'}
        title={'Sporting Events'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/shower_open_front.jpg'}
        title={'Weddings'}
        // text={'View All'}
        link={'/shop'}
      />
       <ProductCollection
        // image={'/collections/global_front.jpg'}
        title={'Government'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/liberty_front.jpg'}
        title={'Emergency & Disaster Relief'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/highrise_front.jpg'}
        title={'Camping Sites & Parks'}
        // text={'View All'}
        link={'/shop'}
      />
      <ProductCollection
        // image={'/collections/shower_open_front.jpg'}
        title={'Corporate Events'}
        // text={'View All'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
