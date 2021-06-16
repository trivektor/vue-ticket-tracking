import { createStore } from "vuex";

import actions from "./actions";
import mutations from "./mutations";

const store = createStore({
  state: {
    jwtToken: localStorage.getItem("jwtToken"),
    currentUser: null,
    projects: [],
  },
  getters: {
    isLoggedIn: (state) => !!state.jwtToken,
    currentUser: (state) => state.currentUser,
  },
  mutations,
  actions,
});

export default store;
