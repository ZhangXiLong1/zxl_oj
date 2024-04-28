import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuth from "@/views/NoAuth.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import UserLayout from "@/layout/UserLayout.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
export const routes: Array<RouteRecordRaw> = [
    {
        path: "/user",
        name: "用户",
        component: UserLayout,
        children: [
            {
                path: '/user/login',
                name: "用户登录",
                component: UserLoginView,
            },
            {
                path: '/user/register',
                name: "用户注册",
                component: UserRegisterView,
            },
        ],
        meta:{
            hideInMenu: true,
        }
    },
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
        meta:{
            hideInMenu: true
        }
    },
    {
        path: "/about",
        name: "关于我的",
        component: ()=> import("../views/AboutView.vue"),
    },
];