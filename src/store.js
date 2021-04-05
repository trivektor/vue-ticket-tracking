import {createStore} from 'vuex';

import apolloClient from './apollo-client';
import {loginMutation} from './graphql/mutations';
import {getCurrentUser} from './graphql/queries';

const store = createStore({
  state: {
    jwtToken: localStorage.getItem('jwtToken'),
    currentUser: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.jwtToken,
    currentUser: (state) => state.currentUser,
  },
  mutations: {
    SET_CURRENT_USER(state, currentUser) {
      state.currentUser = currentUser;
    },
    LOGOUT_USER(state) {
      state.jwtToken = undefined;
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
  actions: {
    async login({dispatch}, {username, password}) {
      // https://blog.logrocket.com/handling-authentication-in-your-graphql-powered-vue-app/
      const {data} = await apolloClient.mutate({
        mutation: loginMutation,
        variables: {username, password},
      });

      localStorage.setItem('jwtToken', data.login);
      dispatch('getCurrentUser');
    },
    logout({commit}) {
      commit('LOGOUT_USER');
    },
    async getCurrentUser({commit}) {
      const {data} = await apolloClient.query({
        query: getCurrentUser,
      });

      commit('SET_CURRENT_USER', data.getCurrentUser);
    },
  },
});

export default store;
