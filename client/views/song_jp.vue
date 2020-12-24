<template>
  <div id="tabledata">

    <el-input placeholder="Please input" v-model="search" style="width: 300px" clearable />
    {{this.counterSong}} - {{this.counterAll}} </p>

    <el-table
      :data="MainTable()"
      style="width: 100%"
      :default-sort = "{order: 'ascending'}" lazy>

      <el-table-column type="expand">
      <template slot-scope="each_song">
        <el-table :data="SearchFromArchive(each_song.row)" style="width: 100%">

          <el-table-column prop="archive_date" label="Date" width="100" align="center"></el-table-column>

          <el-table-column label="Archive" width="calc(100% - 250)" header-align="center">
            <template slot-scope="hyperlink">
              <a :href="hyperlink.row.archive_url" target="_blank">
                {{hyperlink.row.archive_title.substring(0,30)}} · · · 
                {{hyperlink.row.time_vis}}</a>
            </template>
          </el-table-column>

          <el-table-column label="additional" width="150" align="center">
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

      <el-table-column prop="title[0]" label="Title" width="340" header-align="center" sort-by="title[0]" sortable></el-table-column>
      
      <el-table-column label="singer" width="calc(100% - 580)" header-align="center">
        <template slot-scope="singer">
          <el-tag
            v-for="item in singer.row.singer[0]"
            :key="item.key"
            type="success">
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="additional[0]" label="additional" width="240" header-align="center">
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
  </div>
</template>

<script>
import SongData from './song_data.js'
import ArchiveData from './archive_data.js'
import SearchData from './search_data.js'

export default {
  name: "SongJP",
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
        var nameA = a.title[0].toUpperCase()
        var nameB = b.title[0].toUpperCase()
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

          var archiveNumberArray = SearchData.get(eachSong['key'])
          archiveNumberArray.forEach(function (archiveNumber) {
            ArchiveData[archiveNumber]['setlist'].forEach(function (entry) {
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

      var archiveNumberArray = SearchData.get(song['key'])
      archiveNumberArray.forEach(function (archiveNumber) {
        ArchiveData[archiveNumber]['setlist'].forEach(function (entry) {
          if (entry['song'] === song['title']) {
            entry['archive_title'] = ArchiveData[archiveNumber]['title'][0]
            entry['archive_url'] = ArchiveData[archiveNumber]['url'] + entry['time_query']
            entry['archive_date'] = ArchiveData[archiveNumber]['date']
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
    }
  },
  components: {},
};
</script>

<style lang="scss">
@import "./tag_style.scss";
</style>
