// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Import core components
import Vue from 'vue'
/* eslint-disable */
import AppT from '@/AppT'
// import VueLazyload from 'vue-lazyload'

// Import router
import router from '@/router'

// Use the resources
// Vue.use(VueLazyload)

// Debugging config
Vue.config.devtools = true
Vue.config.debug = true
Vue.config.productionTip = false

// Register widgets

/* eslint-disable */
window.Event = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<AppT/>',
  components: { AppT },
});
