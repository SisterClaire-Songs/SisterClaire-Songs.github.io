<template>
  <div id="sidebar" :class="{'open': true}">
    <el-menu theme="light" router>
      <div class="logo-container">
        <img class="logo" src="https://vuejs.org/images/logo.png" />
      </div>
      <el-menu-item index="/">Dashboard</el-menu-item>
      <el-menu-item index="/post/0">Post #0</el-menu-item>
      <el-menu-item index="/post/1">Post #1</el-menu-item>
      <el-menu-item index="/song">Song</el-menu-item>
      <el-menu-item index="/archive">Archive</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
