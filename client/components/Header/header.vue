<template>
  <header>
    <el-menu theme="dark" mode="horizontal">
      <el-menu-item class="header-navicon" index="1">
        <el-button type="text">
          <i class="md-icon">menu</i>
        </el-button>
      </el-menu-item>
      <span class="header-title">{{title}}</span>
      <el-submenu class="header-menu" index="3">
        <template slot="title">Language</template>
        <el-menu-item index="4-1" @click="changeLangJp">Japanese</el-menu-item>
        <el-menu-item index="4-2" @click="changeLangKr">Korean</el-menu-item>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'changeLangJp', 'changeLangKr']
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
