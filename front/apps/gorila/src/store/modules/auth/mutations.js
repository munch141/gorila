export default {
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state, user) {
    state.user = user;
  },
  setDidAutoLogout(state, didAutoLogout) {
    state.didAutoLogout = didAutoLogout;
  },
};
