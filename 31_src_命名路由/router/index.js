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
              path: "detail",
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});
