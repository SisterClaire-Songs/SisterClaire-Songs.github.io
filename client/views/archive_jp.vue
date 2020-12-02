<template>
  <div id="ArchiveJP">
    <h1>Here Is ArchiveJP Page</h1>
    <el-table :data="ArchiveData1" style="width: 100%">
      <el-table-column type="expand">
      <template slot-scope="props">

        <el-table :data=props.row.setlist style="width: 100%">
          <el-table-column prop="time_vis" label="Time_vis" width="100"></el-table-column>
          <el-table-column prop="song" label="Song" width="500"></el-table-column>
          <el-table-column prop="additional" label="Additional" width="500"></el-table-column>
        </el-table>

      </template>
    </el-table-column>
      <el-table-column prop="title" label="Title" width="500"></el-table-column>
      <el-table-column prop="date" label="Date" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import ArchiveData from './archive_data.js'

export default {
  name: "ArchiveJP",
  data() {
    return {
      ArchiveData1: ArchiveData
    };
  },
  components: {},
};
</script>
