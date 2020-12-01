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


1 {{ value }}<br>
    2 {{ songdata }}<br>
    3 {{ archive }}<br>

<el-select v-model="value" placeholder="Select">
    <el-option      
      key="aaa"
      label="aaa"
      value="aaa">
    </el-option>
    <el-option      
      key="bbb"
      label="bbb"
      value="bbb">
    </el-option>
  </el-select>
  
    

  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      songdata: 'aaa1',
      archive: 'bbb1'
    }
  },
  methods: {
    change1: function () {
      this.songdata = 'aaa1'
      this.archive = 'bbb1'
    },
    change2: function () {
      this.songdata = 'aaa2'
      this.archive = 'bbb2'
    }
  }
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
