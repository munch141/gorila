import { AuthState } from './state';

export interface IsAuthenticatedPayload {
  isAuthenticated: boolean;
}

export default {
  setAuth(state: AuthState, { isAuthenticated }: IsAuthenticatedPayload) {
    state.isAuthenticated = isAuthenticated;
  },
};
