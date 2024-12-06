//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name: "about123",
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news" /* 子路由不用在写/了 */,
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "detail123",
              path: "detail/:id/:title",
              component: Detail,
              //props的第一种写法 ：值为对象 该对象中的键值对会以props的形式传给Detail组件
              // props: { a: 1, b: "hello" },

              //props的第二种写法 ：值为布尔值
              // 为真，把该路由接收到的所有params参数，以props的形式传给Detail组件
              // props: true,

              //props的第三种写法 ：值为函数
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                };
              },
              /* 写法三的解构赋值： */
              /*  props({ params }) {
                return {
                  id: params.id,
                  title: params.title,
                };
              }, */
              /* 写法三的解构赋值进阶： */
              /*    props({ params: { id, title } }) {
                return {
                  id,
                  title,
                };
              }, */
            },
          ],
        },
      ],
    },
  ],
});
