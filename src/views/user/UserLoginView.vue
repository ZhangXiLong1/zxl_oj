<template>
  <h1 style="margin-bottom: 16px">欢迎登录</h1>
  <div id="userLogin">
    <a-form auto-label-width style="max-width: 480px; margin: 0 auto" label-align="left" :model="form" @submit="handleSubmit">
      <a-form-item field="userAccount" tooltip="请输入用户账号" label="账号">
        <a-input
            v-model="form.userAccount"
            placeholder="请输入用户账号"
            style="width: 600px"
        />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password v-model="form.userPassword" placeholder="请输入密码" style="width: 600px" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 160px; margin: 0 auto" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import message from "@arco-design/web-vue/es/message"
import {UserControllerService, UserLoginRequest} from "../../../generated";
import store from "@/store";
import {useRouter} from "vue-router";
const router = useRouter();
//表单信息
const form = reactive({
  userAccount: '',
  userPassword: '',
} as UserLoginRequest);
//提交方法
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  if(res.code === 0) {
    alert("登陆成功" + JSON.stringify(res.data));
    // store.commit("updateUser", res.data)
    await store.dispatch("getLoginUser")
    router.push({
      path: '/',
      replace: true,
    });
  }else{
    message.error("登录失败" + JSON.stringify(res.message));
  }
};
</script>

<style scoped>
</style>