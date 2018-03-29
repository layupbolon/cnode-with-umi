import React from 'react';

import styles from './index.css';

function UserImage({imageUrl, width = 38, height = 38}) {
  return (
    <div className={styles.userImage} style={{
      backgroundImage: 'url(' + imageUrl + ')',
      width: `${width}px`,
      height: `${height}px`,
    }}>
    </div>
  )
}

export default UserImage;
