<template>
  <div id="tableData">
    <el-table :data="archivedata" style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Archive',
  props: ['curLang'],
  data () {
    return {}
  },
  components: {}
}
</script>
