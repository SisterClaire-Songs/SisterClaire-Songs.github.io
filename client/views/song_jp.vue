<template>
  <div id="SongJP">

    <el-input placeholder="Please input" v-model="search" style="width: 50%" clearable />
    {{GetCounter()}}

    <el-table
      :data="Array.from(this.SongData1.values()).filter(this.FilterData)"
      style="width: 100%"
      :default-sort = "{prop: 'title[0]', order: 'descending'}" lazy>

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

          <el-table-column prop="additional[0]" label="additional" width="180"></el-table-column>
        </el-table>
      </template>
      </el-table-column>

      <el-table-column prop="title[0]" label="Title" width="300" sortable></el-table-column>
      
      <el-table-column prop="singer[0]" label="singer" width="300"></el-table-column>

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
      search: ""
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
    },

    FilterData: function (data) {
      return !this.search ||
        data.title[0].toLowerCase().includes(this.search.toLowerCase()) ||
        this.SearchSubArray(data.singer[0], this.search.toLowerCase()) ||
        this.SearchSubArray(data.additional[0], this.search.toLowerCase())
    },

    SearchSubArray: function (array, word) {
      var tf = false
      array.forEach(function (eachElement) {
        if (eachElement.toLowerCase().includes(word)) {
          tf = true
        }
      })
      return tf
    },

    GetCounter: function () {
      var counter = 0
      Array.from(this.SongData1.values()).filter(this.FilterData).forEach(function (eachSong) {
        ArchiveData.forEach(function (archive) {
          archive['setlist'].forEach(function (entry) {
            if (entry['song'] === eachSong['title']) {
              counter++
            }
          })
        })
      })
      return counter
    }
  },
  components: {},
};
</script>
