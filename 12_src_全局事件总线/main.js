//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";

/* 
const Demo = Vue.extend({});
const d = new Demo();

Vue.prototype.x = d; */

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
