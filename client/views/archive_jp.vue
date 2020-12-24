<template>
  <div id="tabledata">
    以下のアーカイブが入っているYouTubeの再生リストはこれです！<br>
    <a href="https://www.youtube.com/playlist?list=PL5AupjB1xXYKndTwncj7AhCCrCCT76e0B" target="_blank">
    https://www.youtube.com/playlist?list=PL5AupjB1xXYKndTwncj7AhCCrCCT76e0B</a> </p>

    <el-table :data="ArchiveData1" style="width: 100%">

      <el-table-column type="expand">
      <template slot-scope="each_archive">
        <el-table :data=each_archive.row.setlist style="width: 100%">
          <el-table-column prop="time_vis" label="Timestamp" width="110" align="center"></el-table-column>

          <el-table-column prop="song[0]" label="曲名" width="350" header-align="center">            
            <template slot-scope="hyperlink">
              <a :href="each_archive.row.url + hyperlink.row.time_query" target="_blank">
                {{hyperlink.row.song[0]}}</a>
            </template>
          </el-table-column>

          <el-table-column label="追加情報" width="calc(100% - 340)" align="center">
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

      <el-table-column prop="title[0]" label="配信タイトル" width="calc(100% - 200)" header-align="center"></el-table-column>
      
      <el-table-column prop="date" label="配信日" width="200" align="center" ></el-table-column>

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
