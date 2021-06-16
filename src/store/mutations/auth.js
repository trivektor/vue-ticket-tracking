const authMutations = {
  SET_CURRENT_USER(state, currentUser) {
    state.currentUser = currentUser;
  },
  LOGOUT_USER(state) {
    state.jwtToken = undefined;
    state.isLoggedIn = false;
    state.currentUser = null;
  },
};

export default authMutations;
