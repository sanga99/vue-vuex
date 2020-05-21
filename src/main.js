import Vue from 'vue'
import App from './App.vue'
import { store } from './store';

Vue.config.productionTip = false

new Vue({
  store,
  // store : store 가 정확한 쓰임이나, 앞 뒤가 같을 경우 store, 처럼 하나로 쓸 수 있다. 
  render: h => h(App),
}).$mount('#app')
