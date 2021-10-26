import Vue from 'vue';
import ElementUI from 'element-ui'; //要写
import 'element-ui/lib/theme-chalk/index.css'; //要写
import App from './App.vue';

Vue.use(ElementUI);  //要写

new Vue({
  el: '#app',
  render: h => h(App)
});
