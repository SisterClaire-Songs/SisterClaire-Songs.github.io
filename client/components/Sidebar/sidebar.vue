<template>
  <div id="sidebar" :class="{'open': active1}">
    <el-menu theme="light" router>

      <div class="logo-container">
        <img class="logo" src="https://yt3.ggpht.com/ytc/AAUvwnh-0fXwzJ05kbakJWLSQAO9fPZLWQ9vetWGyU0XpQ=s150-c-k-c0x00ffffff-no-rj" />
      </div>

      <el-menu-item v-bind:index="indexURL" align="center">{{indexMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="songdataURL" align="center">{{songMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="archiveURL" align="center">{{archiveMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="aboutURL" align="center">{{aboutMenuDesc}}</el-menu-item>

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
  props: ['active'],
  computed: {
    active1: function () {
      return this.active
    }
  },
  data() {
    return {
      curLang: "JP",
      indexURL: "index_jp",
      indexMenuDesc: "ホーム",
      songdataURL: "song_jp",
      songMenuDesc: "曲別",
      archiveURL: "archive_jp",
      archiveMenuDesc: "アーカイブ別",
      aboutURL: "about_jp",
      aboutMenuDesc: "このサイトは",
    };
  },
  methods: {
    changeLang: function () {
      if (this.curLang == "JP") {
        this.indexURL = "index_jp";
        this.indexMenuDesc = "ホーム";
        this.songdataURL = "song_jp";
        this.songMenuDesc = "曲別";
        this.archiveURL = "archive_jp";
        this.archiveMenuDesc = "アーカイブ別";
        this.aboutURL = "about_jp";
        this.aboutMenuDesc = "このサイトは";
        
        this.$router.push('/index_jp')

      } else {
        this.indexURL = "index_kr";
        this.indexMenuDesc = "홈";
        this.songdataURL = "song_kr";
        this.songMenuDesc = "곡별";
        this.archiveURL = "archive_kr";
        this.archiveMenuDesc = "아카이브별"
        this.aboutURL = "about_kr";
        this.aboutMenuDesc = "이 사이트는";

        this.$router.push('/index_kr')
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
