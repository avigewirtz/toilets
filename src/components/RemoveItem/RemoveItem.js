// import React from 'react';

// import Icon from '../Icons/Icon';

// import * as styles from './RemoveItem.module.css';

// const RemoveItem = (props) => {
//   return (
//     <div className={styles.root}>
//       <Icon symbol={'cross'} />
//     </div>
//   );
// };

// export default RemoveItem;

import React from 'react';
import Icon from '../Icons/Icon';

import * as styles from './RemoveItem.module.css';

const RemoveItem = (props) => {
  const handleRemoveClick = () => {
    console.log('Remove item clicked');
    if (props.onRemove) {
      props.onRemove();
    }
  };

  return (
    <div className={styles.root} onClick={handleRemoveClick}>
      <Icon symbol={'cross'} />
    </div>
  );
};

export default RemoveItem;

