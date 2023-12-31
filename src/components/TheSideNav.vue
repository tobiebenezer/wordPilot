<template>
  <div class="sidebar">
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <hr />
    <div class="menu">
      <ul>
        <li><font-awesome-icon icon="fa-solid fa-border-all" /> Dashboard</li>
        <li><font-awesome-icon icon="fa-solid fa-folder-closed" />Projects</li>
        <li><font-awesome-icon icon="fa-regular fa-calendar-days" />Scheduler</li>
        <li><font-awesome-icon icon="fa-solid fa-star"  />Content Wizard</li>
        <li><font-awesome-icon icon="fa-solid fa-file" />Documents</li>
        <li><font-awesome-icon icon="fa-solid fa-right-from-bracket" />Log Out</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
@import '../assets/base.less';

.sidebar {
  background: @secondary;
  height: 100vh;
  width: 16rem;
  position: sticky;
  top: 0;
  padding: 1.3rem;
  color:#7a7a7a;
  flex: 1 1;

  .logo {
    text-align: center;
  }

  hr {
    height: 1px;
    border: none;
    background-color: #7a7a7a;
    margin: 0.8rem 0 2.5rem 0;
  }

  li {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    list-style: none;
    padding: 0.7rem 1.2rem;
    margin: 0.4rem 0;

    &:nth-child(2) {
      background-color: @primary;
      border-radius: @bradius;
      color:white;
    }
  }
}
</style>