//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
import { hun, hun2 } from "./mixin";

Vue.mixin(hun);
Vue.mixin(hun2);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
