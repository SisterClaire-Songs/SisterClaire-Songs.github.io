<template>
  <div id="app">
    <div class="page-layout">
      <sidebar-component :active="sidebarOpened" />
      <div class="page-layout-inner">
        <main>
          <div class="main-content">
            <el-row class="container">
              <router-view></router-view>
            </el-row>
          </div>
        </main>
      </div>
      <dimmer-component :active="obfuscatorActive" :closeSidebar="closeSidebar"  />
    </div>
  </div>
</template>

<script>
import Sidebar from "components/Sidebar/sidebar.vue";
import Dimmer from "components/Dimmer/dimmer.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(['handleResize', 'openSidebar', 'closeSidebar'])
  },
  computed: {
    ...mapState({
      sidebarOpened: state => {
        return state.ui.sidebarOpened
      },
      obfuscatorActive: state => {
        return state.ui.obfuscatorActive
      }     
    }),
  },
  components: {
    "sidebar-component": Sidebar,
    "dimmer-component": Dimmer,
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
  }
};
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import "~scss_vars";
@import "./style.scss";
</style>
