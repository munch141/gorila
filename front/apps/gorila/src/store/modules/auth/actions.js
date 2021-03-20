import authService from '../../../services/auth';

let timer;

export default {
  async login(context, password) {
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
  async tryLogin(context) {
    const token = localStorage.getItem('token');
    const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');

    let tokenExpiresIn = -1;

    if (tokenExpirationDate) {
      tokenExpiresIn = parseInt(tokenExpirationDate, 10) - new Date().getTime();
    }

    const tokenExpired = tokenExpiresIn < 0;

    if (token && !tokenExpired) {
      const user = JSON.parse(localStorage.getItem('user'));
      context.commit('setIsAuthenticated', true);
      context.commit('setUser', user);
      context.commit('setDidAutoLogout', false);

      timer = setTimeout(() => context.dispatch('autoLogout'), tokenExpiresIn);
    }
  },
  logout(context) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationDate');
    clearTimeout(timer);
    context.commit('setIsAuthenticated', false);
    context.commit('setUser', null);
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setDidAutoLogout', true);
  },
};
