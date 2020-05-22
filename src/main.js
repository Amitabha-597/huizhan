import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./utils/css/flex.css";
import "./utils/css/index.css";
import "./utils/css/element.css"
import "./utils/css/iconfont/iconfont.css"
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App),
}).$mount("#app");
