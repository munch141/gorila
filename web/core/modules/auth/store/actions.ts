import authService from '@core/modules/auth/services/auth';
import { State } from 'vue';
import { ActionContext } from 'vuex';
import { User } from '../models/user';

let timer: number;

export default {
  async login(context: ActionContext<State, State>, password: string): Promise<boolean> {
    const authInfo = await authService.login(password);

    if (authInfo) {
      const tokenExpirationDate = new Date().getTime() + authInfo.tokenExpiresIn;
      localStorage.setItem('user', JSON.stringify(authInfo.user));
      localStorage.setItem('token', authInfo.token);
      localStorage.setItem('tokenExpirationDate', tokenExpirationDate.toString());

      timer = setTimeout(() => context.dispatch('autoLogout'), authInfo.tokenExpiresIn);
    }

    context.commit('setIsAuthenticated', !!authInfo);
    context.commit('setUser', authInfo?.user);
    context.commit('setDidAutoLogout', false);

    return !!authInfo;
  },
  async tryLogin(context: ActionContext<State, State>): Promise<void> {
    const token = localStorage.getItem('token');
    const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');

    let tokenExpiresIn: number = -1;

    if (tokenExpirationDate) {
      tokenExpiresIn = parseInt(tokenExpirationDate, 10) - new Date().getTime();
    }

    const tokenExpired = tokenExpiresIn < 0;

    if (token && !tokenExpired) {
      const user: User = JSON.parse(localStorage.getItem('user') as string);
      context.commit('setIsAuthenticated', true);
      context.commit('setUser', user);
      context.commit('setDidAutoLogout', false);

      timer = setTimeout(() => context.dispatch('autoLogout'), tokenExpiresIn);
    }
  },
  logout(context: ActionContext<State, State>) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    clearTimeout(timer);
    context.commit('setIsAuthenticated', false);
    context.commit('setUser', null);
  },
  autoLogout(context: ActionContext<State, State>) {
    context.dispatch('logout');
    context.commit('setDidAutoLogout', true);
  },
};
