import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/style.css' //追加

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
