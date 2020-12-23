<template>
    <header>
        <el-menu theme="dark" mode="horizontal">
            <el-menu-item class="header-navicon" index="1">
                <el-button type="text" @click="openSidebar">
                    <i class="md-icon">menu</i>
                </el-button>
            </el-menu-item>
        </el-menu>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['openSidebar']
}
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>