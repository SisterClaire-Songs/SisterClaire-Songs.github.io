<template>
  <div id="SongJP">
    <h1>Here Is SongJP Page</h1>
    <el-table :data="Array.from(SongData1.values())" style="width: 100%">    

      <el-table-column type="expand">
      <template slot-scope="each_song">
        <el-table :data="SearchFromArchive(each_song.row)" style="width: 100%">
          <el-table-column prop="archive_date" label="Date" width="180"></el-table-column>

          <el-table-column label="Time" width="180">
            <template slot-scope="hyperlink">
              <a :href="hyperlink.row.archive_url" target="_blank">
                {{hyperlink.row.time_vis}}</a>
            </template>
          </el-table-column>

          <el-table-column label="additional" width="180"></el-table-column>
        </el-table>
      </template>
      </el-table-column>

      <el-table-column prop="title[0]" label="Title" width="500"></el-table-column>
      
      <el-table-column prop="singer[0]" label="singer" width="180"></el-table-column>

      <el-table-column prop="additional[0]" label="additional" width="180"></el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import SongData from './song_data.js'
import ArchiveData from './archive_data.js'

export default {
  name: "SongJP",
  data() {
    return {
      SongData1: SongData,
      ArchiveData1: ArchiveData
    };
  },
  methods: {
    SearchFromArchive: function (song) {
      var resultArray = []

      ArchiveData.forEach(function (archive) {
        archive['setlist'].forEach(function (entry) {
          if (entry['song'] === song['title']) {
            entry['archive_title'] = archive['title'][0]
            entry['archive_url'] = archive['url'] + entry['time_query']
            entry['archive_date'] = archive['date']
            resultArray.push(entry)
          }
        })
      })

      return resultArray
    }
  },
  components: {},
};
</script>
