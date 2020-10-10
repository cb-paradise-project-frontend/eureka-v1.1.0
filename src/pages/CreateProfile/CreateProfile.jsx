import React, { useEffect, useState } from 'react';

import styles from './CreateProfile.module.scss';

import Modal from '../../components/Modal';
import ProfileItem from './ProfileItem';
import Button from '../../components/Button';
import isFormFilled from './utils/isFormFilled';
import useForm from './SubPages/useForm';
import FORM from './form';
import LocalStorage from './utils/LocalStorage';

const { getStoredData, storeData, dropStoredData } = new LocalStorage('userProfile');

export default function CreateProfile({ pageToggler }) {
  const [subPage, loadSubPage] = useState();

  const form = useForm(FORM, getStoredData());
  const [updateFlag, setFlag] = useState(false);

  const toggleUpdateFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  const {
    getData,
    handleDataChange,
    touched,
  } = form;

  const formData = getData();

  useEffect(() => {
    if (touched) storeData(formData);
  }, [updateFlag]);

  const handleBackBtnClick = () => {
    loadSubPage('');
  };

  const handleContinueBtnClick = () => {
    dropStoredData();
    pageToggler();
  };

  const createBirthdayLabel = (birthday) => {
    if (!isFormFilled(birthday)) return null;
    const { day, month, year } = birthday;
    const birthdayObj = new Date(year, month - 1, day);
    const formattedBirthday = birthdayObj.toDateString().replace(/[^\s]+/, '');
    return formattedBirthday;
  };

  const profileList = (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label, Page } = FORM[key];
        const value = formData[key];
        const handleChange = (input) => {
          handleDataChange(key)(input);
          toggleUpdateFlag();
          handleBackBtnClick();
        };
        let statusLabel;
        if (key === 'birthday') statusLabel = createBirthdayLabel(value);
        if (key === 'mobile') statusLabel = value;

        return (
          <ProfileItem
            itemName={label}
            handleClick={() => loadSubPage(<Page storedValue={value} onSubmit={handleChange} />)}
            statusLabel={statusLabel}
            checked={isFormFilled(value)} // TODO: bypass optional input "lineTwo" in BillingAddress
            key={key}
          />
        );
      })}
    </div>
  );

  const header = (
    <>
      {subPage &&
        <div className={styles.back_button_wrapper} >
          <Button.BackIcon onClick={handleBackBtnClick} />
        </div>
      }
      <div className={styles.title} >
        To Start Making Money
      </div>
    </>
  );

  const content = (
    <div className={styles.content_wrapper} >
      {subPage || profileList}
    </div>
  );

  const backButton = (
    <Button
    onClick={handleBackBtnClick}
    color={'light-blue'}
    long
  >
    Back
  </Button>
  );

  const continueButton = (
    <Button
    onClick={handleContinueBtnClick}
    color={'light-blue'}
    long
  >
    Continue
  </Button>
  );

  const footer = subPage ? backButton : continueButton;

  return (
    <Modal onRequestClose={pageToggler} >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
}
