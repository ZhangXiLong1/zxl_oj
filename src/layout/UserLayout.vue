<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <a-space>
          <img src="@/assets/oj_logo.png" class="logo" />
          <div>ZXL OJ</div>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://zxlblog.zouhui.top" target="_blank">
          查看我的个人博客-zxl&zh
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout {
  text-align: center;
}
#basicLayout .logo{
  width: 64px;
  height: 64px;
}
#basicLayout .header {
  margin-bottom: 16px;
  margin-top: 16px;
}
#basicLayout .content {
  padding: 20px;
}

#basicLayout .footer {
  padding: 16px;
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
});
</script>
