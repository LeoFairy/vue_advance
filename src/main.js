import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

function a() {}

new Vue({
  render: (h) => h(App),

  /* render(createElement) {
    return createElement("h1", "你好啊");
  }, */

  // render: (q) => q("h1", "你好啊"),
}).$mount("#app");
