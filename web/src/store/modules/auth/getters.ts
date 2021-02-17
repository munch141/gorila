import { AuthState } from './state';

export default {
  isAuthenticated(state: AuthState) {
    return state.isAuthenticated;
  },
};
