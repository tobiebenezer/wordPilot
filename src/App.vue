<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSideNav from "./components/TheSideNav.vue";
import AppSettingComponent from "./components/AppSettingComponent.vue";
import AppCoreSetComponent from "./components/AppCoreSetComponent.vue";


</script>

<template>
  <main class="page">
    <the-side-nav/>
    <div class="main">
      <the-header/>
      <app-setting-component/>
      <app-core-set-component/>

    </div>

  </main>
  
</template>

<style lang="less" scoped>
@import "./assets/base.less";

.page {
  display: flex;
   width: 98lvw;
}

.main {
  flex: 5; 
  padding: 0.9rem;
  width: 80%; 
  overflow-x: hidden;
}
</style>
