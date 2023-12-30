<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSideNav from "./components/TheSideNav.vue";
import AppSettingComponent from "./components/AppSettingComponent.vue";
import AppCoreSetComponent from "./components/AppCoreSetComponent.vue";
import AppMediaHubComponent from "./components/AppMediaHubComponent.vue";
import AppSeoComponent from "./components/AppSeoComponent.vue";
import AppKeywordComponent from "./components/AppKeywordComponent.vue";
import AppStrctureComponent from "./components/AppStrctureComponent.vue";


</script>

<template>
  <main class="page">
    <the-side-nav/>
    <div class="main">
      <div class="header">
        <the-header/>
      </div>
      <app-setting-component/>
      <app-core-set-component/>
      <app-media-hub-component/>
      <app-seo-component/>
      <app-keyword-component/>
      <app-strcture-component/>


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
    .header {

      position: -webkit-sticky;
      position:sticky;
      top:10px;
      align-self: flex-start;
    }

  }
</style>
