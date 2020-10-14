import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { AuthContext } from './../../auth/Auth';
import { logOut } from './../../firebase';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';

import styles from './Profile.module.scss';

const Profile = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const { displayName, email } = currentUser;

  //signOut方法暂时没有调用，等待潘哥处理完firebase登录问题后修复 --维尼
  const signOut = () => {
    logOut();
    if (!currentUser) {
      return (<Redirect to="/" />);
    }
  };

  //暂时使用了hack方法达成点击logout返回主页面的效果，等待signOut方法修复后再做修改 --维尼
  return (
    <React.Fragment>
      <button onClick={() => history.push('/')}>Log out</button>
      <div className={styles.profile_wrapper}>
        <div className={styles.profile}>
          <ProfileNav />
          <ProfileContent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Profile);
