import Vue from 'vue'
import App from './index.vue'
import Kuikui from 'kuikui'
Vue.use(Kuikui);

new Vue({
    render: h => h(App)
}).$mount('#app')
