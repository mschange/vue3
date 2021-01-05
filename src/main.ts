import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入适配
import 'lib-flexible/flexible'

// 引入vant
import { Button, Tabbar, TabbarItem, Form } from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App);
app.use(Button)
 .use(Tabbar)
 .use(TabbarItem)
  .use(Form)
app.use(store);
app.use(router);
app.mount('#app')
