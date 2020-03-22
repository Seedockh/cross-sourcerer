import Vue from 'vue'
import axios from 'axios'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'
import store from './store'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
const token = process.env.ELECTRON_WEBPACK_APP_GITHUB_GRAPHQL_API_TOKEN || ''
console.log(`token: ${token}`)

/* =============================================*
 *======== APOLLO CLIENT CONFIGURATION ========*
 *============================================= */
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer df3585411ff0c25c6ec41cd5c64a3bf5d24c36bd`
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

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
