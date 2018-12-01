/*
 * reducer for factory component
 */
import {constants} from '../../constants';

const initialState = {
  userEmail: ''
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN.SET_EMAIL:
      return {...state, userEmail: action.payload};
    default:
      return state;
  }
};
