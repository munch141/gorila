import { AuthState } from './state';

export default {
  isAuthenticated(state: AuthState) {
    return state.isAuthenticated;
  },
  currentUser(state: AuthState) {
    return state.currentUser;
  },
};
