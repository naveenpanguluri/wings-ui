/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-param-reassign: ["error", { "props": false }] */
/*jshint esnext: true */

import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
   accessToken: ''
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {

  setStateVal(stateVal, keys) {

    for (const [key, value] of Object.entries(keys)) {
      console.log('.................................@@@@@@22',key, value);
      stateVal[key] = value;
    }

    },

};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {

  setStateVal: ({ commit }, key) => {
      commit('setStateVal', key);
    },

};

// getters are functions
const getters = {

  getStateVal: (stateVal) => {
      return stateVal;
    },

};

// A Vuex instance is created by combining the state,
// mutations, actions and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // Used to persist the store on reload
  plugins: [createPersistedState()],
});
