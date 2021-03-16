import { User } from '@core/modules/auth/models/user';
import { AuthState } from './state';

export default {
  setIsAuthenticated(state: AuthState, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state: AuthState, user: User | null) {
    state.user = user;
  },
  setDidAutoLogout(state: AuthState, didAutoLogout: boolean) {
    state.didAutoLogout = didAutoLogout;
  },
};
