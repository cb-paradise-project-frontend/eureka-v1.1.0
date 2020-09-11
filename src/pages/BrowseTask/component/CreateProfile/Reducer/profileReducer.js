import * as ACTION from './Action/actionType';

export default function profileReducer(state, action) {
  console.log(action);
  switch(action.type) {
    case ACTION.PHOTO_UPLOAD:
      return {
        ...state,
        photo: action.payload.photo, 
      };
    case ACTION.ACCOUNT_INPUT:
      return {
        ...state,
        bankAccount: action.payload.bankAccount, 
      };
    case ACTION.BILLING_ADDRESS_INPUT:
      return {
        ...state,
        billingAddress: action.payload.billingAddress, 
      };
    case ACTION.BIRTHDAY_INPUT:
      return {
        ...state,
        birthday: action.payload.birthday, 
      };
    case ACTION.MOBILE_INPUT:
      return {
        ...state,
        mobile: action.payload.mobile, 
      };
    case ACTION.CLICK_PROFILE_ITEM:
      return {
        ...state,
        subPage: action.payload.subPage, 
      };
    case ACTION.CLICK_BACK_BUTTON:
      return {
        ...state,
        subPage: '', 
      };
    default:
      return state;
  }
}