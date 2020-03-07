import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import ProgressBar from 'vuejs-progress-bar'

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(ProgressBar);
Vue.mixin({
    data() {
        return {
            get urlBackend() {
                var url = process.env.VUE_APP_BACKEND_URL || 'http://40.70.133.94:3000';
                console.log('URL : ', url);
                return url;
            }
        }
    }
});
new Vue({
    render: h => h(App),
}).$mount('#app')
