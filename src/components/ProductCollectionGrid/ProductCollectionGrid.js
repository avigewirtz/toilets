import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/construction.png'}
        title={'Construction Sites'}
        link={'/shop'}
      />
      <ProductCollection
       image={'/collections/concert.png'}
        title={'Festivals & Concerts'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/sports.png'}
        title={'Sporting Events'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/wedding.png'}
        title={'Weddings'}
        link={'/shop'}
      />
       <ProductCollection
       image={'/collections/government.png'}
        title={'Government'}
        link={'/shop'}
      />
      <ProductCollection
       image={'/collections/disaster.png'}
        title={'Emergency & Disaster Relief'}
        link={'/shop'}
      />
      <ProductCollection
       image={'/collections/camping.png'}
        title={'Camping Sites & Parks'}
        link={'/shop'}
      />
      <ProductCollection
       image={'/collections/corporate.png'}
        title={'Corporate Events'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
