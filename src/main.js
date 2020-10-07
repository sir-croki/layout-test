import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';


// bootstrap components
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
// end of bootstrap component

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
