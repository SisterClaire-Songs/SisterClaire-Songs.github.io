<template>
  <div id="ArchiveKR">
    <h1>Here Is ArchiveKR Page</h1>
    <el-table :data="songData" style="width: 100%">
      <el-table-column prop="title" label="Title" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ArchiveKR",
  data() {
    return {};
  },
  components: {},
};
</script>
