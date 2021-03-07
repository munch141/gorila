import { User } from '@core/modules/auth/models/user';
import { AuthState } from './state';

export interface IsAuthenticatedPayload {
  isAuthenticated: boolean;
}

export default {
  setAuth(state: AuthState, { isAuthenticated }: IsAuthenticatedPayload) {
    state.isAuthenticated = isAuthenticated;
  },
  setCurrentUser(state: AuthState, user: User | null) {
    state.currentUser = user;
  },
};
