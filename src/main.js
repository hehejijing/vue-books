import Vue from 'vue'
import App from './App.vue'


//配置请求根路径
import axios from 'axios'
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
Vue.prototype.$axios = axios


Vue.config.productionTip = false



//引入ele ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});


