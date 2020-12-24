import Vue from 'vue'
import Router from 'vue-router'
import IndexJP from 'views/index_jp.vue'
import IndexKR from 'views/index_kr.vue'
import SongJP from 'views/song_jp.vue'
import SongKR from 'views/song_kr.vue'
import ArchiveJP from 'views/archive_jp.vue'
import ArchiveKR from 'views/archive_kr.vue'
import AboutJP from 'views/about_jp.vue'
import AboutKR from 'views/about_kr.vue'
import SearchData from 'views/search_maker.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/index_jp',
    component: IndexJP
  }, {
    path: '/index_kr',
    component: IndexKR
  }, {
    path: '/song_jp',
    component: SongJP
  }, {
    path: '/song_kr',
    component: SongKR
  }, {
    path: '/archive_jp',
    component: ArchiveJP
  }, {
    path: '/archive_kr',
    component: ArchiveKR
  }, {
    path: '/about_jp',
    component: AboutJP
  }, {
    path: '/about_kr',
    component: AboutKR
  }, {
    path: '/search_data',
    component: SearchData
  }, {
    path: '/*',
    redirect: '/index_jp'
  }
]
export const router = new Router({ mode: 'history', routes })
