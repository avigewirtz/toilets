import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'servicing all 50 states'}
      />
      <Attribute
        icon={'cycle'}
        title={'Quality Assurance'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
      />
    </div>
  );
};

export default AttributeGrid;
