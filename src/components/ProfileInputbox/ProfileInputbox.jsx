import React from 'react';
import ProfileContent from '../../pages/Profile/ProfileContent/ProfileContent';

import styles from './ProfileInputbox.module.scss';

const ProfileInputbox = ({
  label,
}) => {
  return (
    <React.Fragment>
      <label 
        for={label}
        className={styles.label}
      >
        {label}
      </label>
      <input 
        id ={label}
        className={styles.input}
      >
      </input>
    </React.Fragment>
  )
}

export default ProfileInputbox;