import { AuthState } from './state';

export default {
  isAuthenticated(state: AuthState) {
    return state.isAuthenticated;
  },
  user(state: AuthState) {
    return state.user;
  },
  didAutoLogout(state: AuthState) {
    return state.didAutoLogout;
  },
};
