import React from 'react';

import styles from './ProfileContent.module.scss';

import Account from './Account';

const ProfileContent = ({
  currentNav
}) => {
  const contentDisplay = (currentNav) => {
    return {
      Account: <Account />,
      Payment: "payment",
      Tasks: "tasks",
      Password: "password",
    }[currentNav]
  }
  return (
    <div className={styles.profile_content}>
      {contentDisplay(currentNav)}
    </div>
  )
};

export default ProfileContent;
