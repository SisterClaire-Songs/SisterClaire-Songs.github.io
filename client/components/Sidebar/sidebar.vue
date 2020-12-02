<template>
  <div id="sidebar" :class="{ open: true }">
    <el-menu theme="light" router>
      <div class="logo-container">
        <img class="logo" src="https://vuejs.org/images/logo.png" />
      </div>
      <el-menu-item index="/">Dashboard</el-menu-item>
      <el-menu-item v-bind:index="songdataURL">Song</el-menu-item>
      <el-menu-item v-bind:index="archiveURL">Archive</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>

      <div class="lang-button">
      <el-radio-group v-model="curLang" @change="changeLang">
        <el-radio-button label="JP">JP</el-radio-button>
        <el-radio-button label="KR">KR</el-radio-button>
      </el-radio-group>
    </div>
    </el-menu>

    
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      curLang: "JP",
      songdataURL: "song_jp",
      archiveURL: "archive_jp",
    };
  },
  methods: {
    changeLang: function () {
      if (this.curLang == "JP") {
        this.songdataURL = "song_jp";
        this.archiveURL = "archive_jp";
      } else {
        this.songdataURL = "song_kr";
        this.archiveURL = "archive_kr";
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
