//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";

//完整引入
//引入ElementUI组件库
// import ElementUI from "element-ui";
//引入ElementUI全部样式
// import "element-ui/lib/theme-chalk/index.css";

//按需引入
import { Button, Row, DatePicker } from "element-ui";

//应用ElementUI
// Vue.use(ElementUI);

Vue.component("ysf-button", Button);
Vue.component("ysf-row", Row);
Vue.component("ysf-datepicker", DatePicker);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
