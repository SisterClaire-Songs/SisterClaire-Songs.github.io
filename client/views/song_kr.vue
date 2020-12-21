<template>
  <div id="tabledata">

    <el-input placeholder="Please input" v-model="search" style="width: 50%" clearable />
    {{this.counterSong}} - {{this.counterAll}}

    <el-table
      :data="MainTable()"
      style="width: 100%"
      :default-sort = "{order: 'ascending'}" lazy>

      <el-table-column type="expand">
      <template slot-scope="each_song">
        <el-table :data="SearchFromArchive(each_song.row)" style="width: 90%">

          <el-table-column prop="archive_date" label="Date" width="100" align="center"></el-table-column>

          <el-table-column label="Archive" width="calc(90% - 250)" header-align="center">
            <template slot-scope="hyperlink">
              <a :href="hyperlink.row.archive_url" target="_blank">
                {{hyperlink.row.archive_title.substring(0,30)}} · · · 
                {{hyperlink.row.time_vis}}</a>
            </template>
          </el-table-column>

          <el-table-column label="additional" width="150" align="center">
            <template slot-scope="additional">
              <el-tag
                v-for="item in additional.row.additional[1]"
                :key="item.key"
                type="warning">
                {{ item }}
              </el-tag>
            </template>
          </el-table-column>

        </el-table>
      </template>
      </el-table-column>

      <el-table-column prop="title[1]" label="Title" width="340" header-align="center" sort-by="title[1]" sortable></el-table-column>
      
      <el-table-column label="singer" width="calc(100% - 580)" header-align="center">
        <template slot-scope="singer">
          <el-tag
            v-for="item in singer.row.singer[1]"
            :key="item.key"
            type="success">
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="additional[1]" label="additional" width="240" header-align="center">
        <template slot-scope="additional">
          <el-tag
            v-for="item in additional.row.additional[1]"
            :key="item.key"
            type="warning">
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import SongData from './song_data.js'
import ArchiveData from './archive_data.js'

export default {
  name: "SongKR",
  data() {
    return {
      SongData1: SongData,
      search: "",
      counterSong: 0,
      counterAll: 0
    };
  },
  methods: {
    MainTable: function () {
      var tableData = Array.from(this.SongData1.values()).filter(this.FilterData).sort(function (a, b) {
        var nameA = a.title[1].toUpperCase()
        var nameB = b.title[1].toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
      this.counterSong = tableData.length

      var count = 0
      if (!this.search) {
        this.counterAll = 1959
      } else {
        tableData.forEach(function (eachSong) {
          ArchiveData.forEach(function (archive) {
            archive['setlist'].forEach(function (entry) {
              if (entry['song'] === eachSong['title']) {
                count++
              }
            })
          })
        })
        this.counterAll = count
      }

      return tableData
    },

    SearchFromArchive: function (song) {
      var resultArray = []

      ArchiveData.forEach(function (archive) {
        archive['setlist'].forEach(function (entry) {
          if (entry['song'] === song['title']) {
            entry['archive_title'] = archive['title'][1]
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
        data.title[1].toLowerCase().includes(this.search.toLowerCase()) ||
        this.SearchSubArray(data.singer[1], this.search.toLowerCase()) ||
        this.SearchSubArray(data.additional[1], this.search.toLowerCase())
    },

    SearchSubArray: function (array, word) {
      var tf = false
      array.forEach(function (eachElement) {
        if (eachElement.toLowerCase().includes(word)) {
          tf = true
        }
      })
      return tf
    }
  },
  components: {},
};
</script>

<style lang="scss">
@import "./tag_style.scss";
</style>
