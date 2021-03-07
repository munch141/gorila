import authService from '@core/modules/auth/services/auth';
import { State } from 'vue';
import { ActionContext } from 'vuex';
import { IsAuthenticatedPayload } from './mutations';

export default {
  async login(context: ActionContext<State, State>) {
    const user = await authService.login();
    context.commit('setAuth', { isAuthenticated: true } as IsAuthenticatedPayload);
    context.commit('setCurrentUser', user);
  },
  logout(context: ActionContext<State, State>) {
    context.commit('setAuth', { isAuthenticated: false } as IsAuthenticatedPayload);
  },
};
