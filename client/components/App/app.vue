<template>
  <div id="app">
    <div class="page-layout">
      <sidebar-component />
      <div class="page-layout-inner">
        <header-component :title="title" />
        <main>
          <div class="main-content">
            <el-row class="container">
              <router-view></router-view>
            </el-row>
          </div>
        </main>
      </div>
      <dimmer-component />
    </div>
  </div>
</template>

<script>
import Header from "components/Header/header.vue";
import Sidebar from "components/Sidebar/sidebar.vue";
import Dimmer from "components/Dimmer/dimmer.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["changeLangJP", "changeLangKR"]),
  },
  computed: {
    ...mapState({
      title: (state) => {
        return state.route.meta.title;
      },
      curLang: (state) => {
        return state.language;
      },
    }),
  },
  components: {
    "header-component": Header,
    "sidebar-component": Sidebar,
    "dimmer-component": Dimmer,
  },
};
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
