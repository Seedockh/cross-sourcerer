import Vue from 'vue'
import axios from 'axios'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'
import store from './store'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

/* =============================================*
 *======== APOLLO CLIENT CONFIGURATION ========*
 *============================================= */
const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})
const apolloProvider = new VueApollo({ defaultClient: apolloClient })

/* ==================================*
 *======== VUE CONFIGURATION ========*
 *================================== */
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
  apolloProvider
}).$mount('#app')
