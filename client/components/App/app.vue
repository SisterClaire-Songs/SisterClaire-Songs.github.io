<template>
  <div id="app">
    <div class="page-layout">
      <sidebar-component />
      <div class="page-layout-inner">
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
import Sidebar from "components/Sidebar/sidebar.vue";
import Dimmer from "components/Dimmer/dimmer.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      title: (state) => {
        return state.route.meta.title;
      }      
    }),
  },
  components: {
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
