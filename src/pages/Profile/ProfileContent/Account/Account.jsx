import React from 'react';

import styles from './Account.module.scss';

import ProfileInputbox from '../../../../components/ProfileInputbox';

const Account = () => (
  <React.Fragment>
    <div className={styles.account_wrapper}>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="First Name"
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Last Name"
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Email"
        />
      </div>
      <div className={styles.input_wrapper}>
        {/* 下面部分可以复用ziwei的components*/}
        <ProfileInputbox
          label="DOB"
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Mobile"
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Location"
        />
      </div>
    </div>
  </React.Fragment>
)

export default Account