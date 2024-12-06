//该文件用于创建Vuex中最为核心的store

import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//使用vuex插件
Vue.use(Vuex);

//准备actions-用于相应组件中的动作
const actions = {
  /* add(context, value) {
    context.commit("ADD", value);
  },
  subtraction(context, value) {
    context.commit("SUBTRACTION", value);
  }, */
  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
};

//准备mutations-用于操作数据（state）
const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  SUBTRACTION(state, value) {
    state.sum -= value;
  },
};

//准备state-用于存储数据
const state = {
  sum: 0, //当前的和
  school: "vue",
  subject: "前端",
};

//准备getters-用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//创建并导出store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
