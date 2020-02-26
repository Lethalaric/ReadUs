import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import ProgressBar from 'vuejs-progress-bar'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VModal);
Vue.use(ProgressBar);
Vue.use(VueResource);
new Vue({
    render: h => h(App),
}).$mount('#app')