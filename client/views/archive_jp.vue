<template>
  <div id="tabledata">
    https://www.youtube.com/playlist?list=PL5AupjB1xXYKndTwncj7AhCCrCCT76e0B<br>
    <el-table :data="ArchiveData1" style="width: 100%">

      <el-table-column type="expand">
      <template slot-scope="each_archive">
        <el-table :data=each_archive.row.setlist style="width: 75%">
          <el-table-column prop="time_vis" label="Time_vis" width="100" align="center"></el-table-column>

          <el-table-column prop="song[0]" label="Song" width="350" header-align="center">            
            <template slot-scope="hyperlink">
              <a :href="each_archive.row.url + hyperlink.row.time_query" target="_blank">
                {{hyperlink.row.song[0]}}</a>
            </template>
          </el-table-column>

          <el-table-column label="Additional" width="calc(75% - 350)" align="center">
            <template slot-scope="additional">
              <el-tag
                v-for="item in additional.row.additional[0]"
                :key="item.key"
                type="warning">
                {{ item }}
              </el-tag>
            </template>
          </el-table-column>

        </el-table>
      </template>
      </el-table-column>

      <el-table-column prop="title[0]" label="Title" width="calc(100% - 200)" header-align="center"></el-table-column>
      
      <el-table-column prop="date" label="Date" width="200" align="center" ></el-table-column>

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

<style lang="scss">
@import "./tag_style.scss";
</style>
