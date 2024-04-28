<template>
    <a-row id="globalHeader" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu mode="horizontal" :selected-keys="selectKeys" @menu-item-click="doMenuClick">
          <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
            <div class="title-bar">
              <img class="logo" src="./../assets/oj_logo.png"  alt=""/>
              <div class="title">ZXL OJ</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">
            {{item.name}}
          </a-menu-item>
          </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>
          {{store.state.user?.loginUser?.userName ?? "未登录"}}
        </div>
      </a-col>

    </a-row>
</template>
<script setup lang="ts">
import {routes} from "@/router/routes";
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import {useStore} from "vuex";
const store = useStore();
const router = useRouter();
//默认主页
const selectKeys = ref(["/"]);
import checkAccess from "@/access/checkAccess";
import ACCESS_ENUM from "@/access/accessEnum";

//使用计算属性是为了当登录用户信息发生变更时，触发菜单栏的重新渲染
const visibleRoutes = computed(() => {
  return routes.filter( (item) =>{
    // return !item.meta?.hideInMenu;
    if(item.meta?.hideInMenu){
      return false;
    }
    //根据权限过滤菜单
    if(!checkAccess(store.state.user.loginUser, item?.meta?.access as string)){
      return false;
    }
    return true;
  });
});


console.log(store.state.user.loginUser)


//路由跳转后更新选中的菜单项
router.afterEach((to) => {
  selectKeys.value = [to.path];
  // console.log(selectKeys.value)
});
const doMenuClick = (key : string) => {
  router.push({
    path: key,
  })
}


setTimeout( () =>{
  store.dispatch('user/getLoginUser', {
    userName: "ZXL管理员",
    userRole: ACCESS_ENUM.ADMIN,
  });
}, 3000)
</script>

<style scoped>
.logo{
  height: 48px;
}
#globalHeader{
  height: 48px;
}
.title-bar{
  display: flex;
  align-items: center;
}
.title{
  margin-left: 16px;
  color: #444;
}
</style>