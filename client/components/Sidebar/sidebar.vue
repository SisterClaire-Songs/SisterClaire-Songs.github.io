<template>
  <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router>
      <div class="logo-container">
        <img class="logo" src="https://yt3.ggpht.com/ytc/AAUvwnh-0fXwzJ05kbakJWLSQAO9fPZLWQ9vetWGyU0XpQ=s150-c-k-c0x00ffffff-no-rj" />
      </div>
      <el-menu-item v-bind:index="indexURL">{{indexMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="songdataURL">{{songMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="archiveURL">{{archiveMenuDesc}}</el-menu-item>
      <el-menu-item v-bind:index="aboutURL">{{aboutMenuDesc}}</el-menu-item>

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
    active: () => {
      return this.active
    }
  },
  data() {
    return {
      curLang: "JP",
      indexURL: "index_jp",
      indexMenuDesc: "Dashboard JP",
      songdataURL: "song_jp",
      songMenuDesc: "曲",
      archiveURL: "archive_jp",
      archiveMenuDesc: "アーカイブ",
      aboutURL: "about_jp",
      aboutMenuDesc: "About JP",
    };
  },
  methods: {
    changeLang: function () {
      if (this.curLang == "JP") {
        this.indexURL = "index_jp";
        this.indexMenuDesc = "Dashboard JP";
        this.songdataURL = "song_jp";
        this.songMenuDesc = "曲";
        this.archiveURL = "archive_jp";
        this.archiveMenuDesc = "アーカイブ";
        this.aboutURL = "about_jp";
        this.aboutMenuDesc = "About JP";
        
        this.$router.push('/index_jp')

      } else {
        this.indexURL = "index_kr";
        this.indexMenuDesc = "Dashboard KR";
        this.songdataURL = "song_kr";
        this.songMenuDesc = "곡별";
        this.archiveURL = "archive_kr";
        this.archiveMenuDesc = "아카이브"
        this.aboutURL = "about_kr";
        this.aboutMenuDesc = "About KR";

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
