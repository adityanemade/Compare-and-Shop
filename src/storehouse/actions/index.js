import {
  loadingSpinnerStatus,
  resetLoadingSpinnerStatus,
  setAppLanguage
} from './common';
import {
  setError,
  resetFactory
} from './factory';

export const allActions = {
  COMMON: {
    loadingSpinnerStatus,
    resetLoadingSpinnerStatus,
    setAppLanguage
  },
  FACTORY: {
    setError,
    resetFactory
  }
};
