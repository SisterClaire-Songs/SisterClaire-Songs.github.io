import Vue from 'vue'
import { SongData } from './song_data.js'
import { ArchiveData } from './archive_data.js'

var Main = {
  data () {
    return {
      songData: SongData,
      archivedata: ArchiveData
    }
  }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#tableData')
