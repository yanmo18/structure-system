// 配置路由
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from'../views/HomeViewPage.vue';

const router=createRouter({
    history:
    createWebHistory(import.meta.env.BASE_URL),
    // 创建路由模式
    // 路由规则routes数组模式
    routes:[
        {
        // 路由规则
        path:"/",
        name:"home",
        component:HomeView
        // 导入组件写法1，在上方导入，直接使用，适用于首页等常用组件
 },
 {
    path:"/middle",
    name:"middle",
    // 导入组件写法2，路由懒加载，直接导入，在用户访问该路由的时候才加载组件
    component:()=>import('../views/MiddlePageView.vue')
 }
]
})
export default router;