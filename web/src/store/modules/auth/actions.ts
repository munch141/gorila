import { State } from 'vue';
import { ActionContext } from 'vuex';
import { IsAuthenticatedPayload } from './mutations';

export default {
  login(context: ActionContext<State, State>) {
    context.commit('setAuth', { isAuthenticated: true } as IsAuthenticatedPayload);
  },
  logout(context: ActionContext<State, State>) {
    context.commit('setAuth', { isAuthenticated: false } as IsAuthenticatedPayload);
  },
};
