<template>
  <div id="tableData">
    <el-table :data="songData" style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: ['curLang'],
  data () {
    return {}
  },
  components: {}
}
</script>
