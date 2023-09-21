import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Proudly servicing all 50 states'}
        subtitle={'Click to learn more'}
      />
      <Attribute
        icon={'cycle'}
        title={'Quality Assurance'}
        subtitle={''}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
