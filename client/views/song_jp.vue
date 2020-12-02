<template>
  <div id="SongJP">
    <h1>Here Is SongJP Page</h1>

    {{Array.from(SongData1)}}


    <el-table :data="Array.from(SongData1)" style="width: 100%">
    
      <el-table-column type="expand">

      <template slot-scope="each_song">
        <el-table :data=each_song.row style="width: 100%">
          <el-table-column prop="title" label="Title" width="180"></el-table-column>
          <el-table-column prop="singer" label="singer" width="180"></el-table-column>
          <el-table-column prop="additional" label="additional"></el-table-column>
        </el-table>

      </template>
      </el-table-column>
      <el-table-column prop="title" label="Title" width="850">{{tabledata}}</el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import SongData from './song_data.js'

export default {
  name: "SongJP",
  data() {
    return {
      SongData1: SongData
    };
  },
  components: {},
};
</script>
