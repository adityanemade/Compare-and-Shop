import {
  loadingSpinnerStatus,
  resetLoadingSpinnerStatus,
  setAppLanguage
} from './common';
import {
  setError,
  resetFactory
} from './factory';
import {
  setEmail
} from './login';

export const allActions = {
  COMMON: {
    loadingSpinnerStatus,
    resetLoadingSpinnerStatus,
    setAppLanguage
  },
  FACTORY: {
    setError,
    resetFactory
  },
  LOGIN: {
    setEmail
  }
};
