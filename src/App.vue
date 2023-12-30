<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSideNav from "./components/TheSideNav.vue";


</script>

<template>
  <main class="page">
    <the-side-nav/>
    <div class="main">
      <the-header/>

    </div>

  </main>
  
</template>

<style lang="less" scoped>
@import "./assets/base.less";

.page {
  display: flex;
   width: 100lvw;
}

.main {
  flex: 5; 
  padding: 0.9rem;
  width: 80%; 
}
</style>
