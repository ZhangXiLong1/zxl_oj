import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuth from "@/views/NoAuth.vue";
import ACCESS_ENUM from "@/access/accessEnum";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "浏览题目",
        component: HomeView,
    },
    {
        path: "/hide",
        name: "隐藏页面",
        component: HomeView,
        meta:{
            hideInMenu: true
        }
    },
    {
        path: "/admin",
        name: "管理员",
        component: AdminView,
        meta:{
            access: ACCESS_ENUM.ADMIN
        }
    },
    {
        path: "/noAuth",
        name: "你没权限",
        component: NoAuth,
    },
    {
        path: "/about",
        name: "关于我的",
        component: ()=> import("../views/AboutView.vue"),
    },
];