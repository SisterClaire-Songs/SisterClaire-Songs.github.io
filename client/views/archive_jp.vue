<template>
  <div id="ArchiveJP">
    <h1>Here Is ArchiveJP Page</h1>
    <el-table :data="ArchiveData1" style="width: 100%">

      <el-table-column type="expand">
      <template slot-scope="each_archive">
        <el-table :data=each_archive.row.setlist style="width: 100%">
          <el-table-column prop="time_vis" label="Time_vis" width="100"></el-table-column>

          <el-table-column prop="song[0]" label="Song" width="300">            
            <template slot-scope="hyperlink">
              <a :href="each_archive.row.url + hyperlink.row.time_query" target="_blank">
                {{hyperlink.row.song[0]}}</a>
            </template>
          </el-table-column>

          <el-table-column prop="additional[0]" label="Additional" width="200"></el-table-column>
        </el-table>
      </template>
      </el-table-column>

      <el-table-column prop="title[0]" label="Title" width="500"></el-table-column>
      
      <el-table-column prop="date" label="Date" width="200"></el-table-column>

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
