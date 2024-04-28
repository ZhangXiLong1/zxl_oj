import {StoreOptions} from "vuex";
import ACCESS_ENUM from "@/access/accessEnum";


export default {
    namespaced: true,
    state :{
        loginUser: {
            userName: "未登录",
            userRole: ACCESS_ENUM.NOT_LOGIN,
        },
    },
    mutations :{
        updateUser(state, payload) {
            state.loginUser = payload;
        }
    },
    actions: {
        getLoginUser({ commit}, payload) {
            //TODO 改为从远程请求获取登录信息
            commit("updateUser", payload);
        },
    },
}as StoreOptions<any>;