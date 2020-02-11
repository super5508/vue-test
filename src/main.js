import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.css';

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuex)

import store from './store'

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
