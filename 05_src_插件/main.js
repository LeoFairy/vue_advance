//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入插件
import plugins from "./plugins";
//使用插件
Vue.use(plugins);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
