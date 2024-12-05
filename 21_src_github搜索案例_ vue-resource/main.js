//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入插件
import vueResource from "vue-resource";
//使用插件
Vue.use(vueResource);

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
