// 从Vue组件库导入createApp和createPinia函数,用于创建Vue示例，状态管理
import { createApp } from 'vue'

import { createPinia } from 'pinia'

//导入根组件App.vue,用于根容器
import App from './App.vue'

//导入路由实例，用于路由规则、路径
import router from './router'

//导入ant-design-vue样式组件库，并命名为Antd
import Antd from "ant-design-vue";

//导入样式 给所有浏览统一样式的
import 'ant-design-vue/dist/reset.css';


const app = createApp(App)//创建Vue应用实例，并传入根组件App
//将导入的插件挂载到APP实例上面
app.use(createPinia())//使用Pinia状态管理插件
app.use(router)//使用路由插件
app.use(Antd)

app.mount('#app')//将APP实例挂载到id为app的元素上
