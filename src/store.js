import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex);

const state = {
  companyName: '',
  color: '',
}

const getters = {
  getCompanyName: state => state.companyName,
  getColor: state => state.color
}

const mutations = {
  setCompanyName: (state, payload) => {
    state.companyName = payload;
  },
  setColor: (state, payload) => {
    state.color = payload;
  }
}

const imageEdit = {
  state,
  getters,
  mutations,
}

const myStore = new Store({
  modules: {
    imageEdit,
  }
});

export default myStore;