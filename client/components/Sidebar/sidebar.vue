<template>
  <div id="sidebar" :class="{ open: true }">
    <el-menu theme="light" router>
      <div class="logo-container">
        <img class="logo" src="https://vuejs.org/images/logo.png" />
      </div>
      <el-menu-item index="/">Dashboard</el-menu-item>
      <el-menu-item index="songdataURL">Song</el-menu-item>
      <el-menu-item index="/archive">Archive</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>

    1 {{ songdataURL }}<br />
    2 {{ archiveURL }}<br />

    <div>
      <el-radio-group v-model="testLang" @change="changeLang">
        <el-radio-button label="JP">JP</el-radio-button>
        <el-radio-button label="KR">KR</el-radio-button>
      </el-radio-group>
    </div>

    3 {{ testLang }}<br />
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      testLang: "JP",
      songdataURL: "song/jp",
      archiveURL: "archive/jp",
    };
  },
  methods: {
    changeLang: function () {
      if (this.testLang == "JP") {
        this.songdataURL = "song/jp";
        this.archiveURL = "archive/jp";
        console.log("aaaa");
      } else {
        this.songdataURL = "song/kr";
        this.archiveURL = "archive/kr";
        console.log("bbbb");
      }
    },
  },
};
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
