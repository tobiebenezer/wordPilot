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
  display:flex;
    .main {
    padding: 1.2rem;
  }
}

</style>
