export default {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  user(state) {
    return state.user;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
