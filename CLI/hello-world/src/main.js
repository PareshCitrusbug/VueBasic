import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.component('app-user-name',HelloWorld);
new Vue({
  render: h => h(App),
}).$mount('#app')
