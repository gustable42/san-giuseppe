import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './global.css'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBars, faTimes, faArrowUp, faArrowDown);

new Vue({
  render: h => h(App),
}).$mount('#app')
