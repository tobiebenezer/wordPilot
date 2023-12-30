<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSideNav from "./components/TheSideNav.vue";
import AppSettingComponent from "./components/AppSettingComponent.vue";
import AppCoreSetComponent from "./components/AppCoreSetComponent.vue";
import AppMediaHubComponent from "./components/AppMediaHubComponent.vue";
import AppSeoComponent from "./components/AppSeoComponent.vue";
import AppKeywordComponent from "./components/AppKeywordComponent.vue";
import AppStrctureComponent from "./components/AppStrctureComponent.vue";
import AppDocumentComponent from "./components/AppDocumentComponent.vue";


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
      <app-document-component />
    </div>

  </main>
  
</template>

<style lang="less" scoped>
@import "./assets/base.less";

.page {
  display: flex;
   width: 98lvw;
   position:static;
   top:0;

  }
  
  
  .main {
    margin-top:5rem ;
    align-self: flex-start;
    position: -webkit-sticky;
    flex: 5; 
    padding: 0.9rem;
    width: 80%; 
    overflow-x: hidden;
    .header {
      margin-top:0.2rem;
      position:-webkit-sticky;
      position:fixed;
      width:78vw;
      top:0;
      background:@bgcolor;
     
      align-self: flex-start;
    }

  }
</style>
