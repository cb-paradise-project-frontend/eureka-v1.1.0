import React from 'react';

import styles from './ProfileNav.module.scss';

import Avatar from './Avatar';
import Navigation from './Navigation';

class ProfileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNav: 'Account',
    };

    this.handleNavChange = this.handleNavChange.bind(this);
    this.handleCurrentNav = this.handleCurrentNav.bind(this);
  }

  handleNavChange(currentNav) {
    this.setState({
      currentNav: currentNav,
    });
  }

  handleCurrentNav(currentNav) {
    if (currentNav === 'Payment') {
      return (
        <span className={styles.active}>&#8226;</span>
      )
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { currentNav } = this.state;

    return (
      <div className={styles.profile_nav}>
        <Avatar />
        <div className={styles.navigation}>
          <Navigation 
            handleNavChange={this.handleNavChange}
            currentNav={currentNav}
          >
            Account
          </Navigation>
          <Navigation 
            handleNavChange={this.handleNavChange}
            currentNav={currentNav}
          >
            Payment
          </Navigation>
          <Navigation 
            handleNavChange={this.handleNavChange}
            currentNav={currentNav}
          >
            Tasks
          </Navigation>
          <Navigation 
            handleNavChange={this.handleNavChange}
            currentNav={currentNav}
          >
            Password
          </Navigation>
        </div>
      </div>
    );
  }
}

export default ProfileNav;
