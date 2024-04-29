<template>
  <h1 style="margin-bottom: 16px">欢迎注册</h1>
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
      <a-form-item field="userPassword" label="密码">
        <a-input-password v-model="form.checkPassword" placeholder="请再次输入密码验证" style="width: 600px" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 160px; margin: 0 auto" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import message from "@arco-design/web-vue/es/message"
import {UserControllerService, UserRegisterRequest} from "../../../generated";
import store from "@/store";
import {useRouter} from "vue-router";
import { validPassword } from '@/utils/validate';
const router = useRouter();
//表单信息
const form = reactive({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
} as UserRegisterRequest);

//提交方法
const handleSubmit = async () => {
  if(!validPassword(form.userPassword as string)){
    alert('密码不符合校验规则，请重新设置');
    return ;
  }
  if(form.userPassword !== form.checkPassword){
    alert('两次输入的密码不一致,请重新输入');
    return ;
  }
  const res = await UserControllerService.userRegisterUsingPost(form);
  if(res.code === 0) {
    alert("注册成功" + JSON.stringify(res.data));
    // store.commit("updateUser", res.data)
    await store.dispatch("getLoginUser")
    router.push({
      path: '/',
      replace: true,
    });
  }else{
    message.error("注册失败" + JSON.stringify(res.message));
  }
};
</script>

<style scoped>
</style>