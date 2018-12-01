/*
 * Defining all the common actions
 */

import {constants} from '../../constants';

export const setEmail = email => (
  {type: constants.LOGIN.SET_EMAIL, payload: email}
);
