import store from './store';
import {history} from './store';
import {allActions} from './actions';

export default {
  STORE: store,
  HISTORY: history,
  ACTIONS: {
    COMMON: allActions.COMMON,
    FACTORY: allActions.FACTORY,
    LOGIN: allActions.LOGIN
  }
};
