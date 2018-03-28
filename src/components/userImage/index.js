import React from 'react';

import styles from './index.css';

function UserImage({imageUrl}) {
  return (
    <div className={styles.userImage} style={{backgroundImage: 'url(' + imageUrl + ')'}}></div>
  )
}

export default UserImage;
