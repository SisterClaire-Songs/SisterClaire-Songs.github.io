import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index.vue'
import SongJP from 'views/song_jp.vue'
import SongKR from 'views/song_kr.vue'
import ArchiveJP from 'views/archive_jp.vue'
import ArchiveKR from 'views/archive_kr.vue'
import About from 'views/about.vue'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Index'
    }
  }, {
    path: '/song_jp',
    component: SongJP,
    meta: {
      title: 'SongJP'
    }
  }, {
    path: '/song_kr',
    component: SongKR,
    meta: {
      title: 'SongKR'
    }
  }, {
    path: '/archive_jp',
    component: ArchiveJP,
    meta: {
      title: 'ArchiveJP'
    }
  }, {
    path: '/archive_kr',
    component: ArchiveKR,
    meta: {
      title: 'ArchiveKR'
    }
  }, {
    path: '/about',
    component: About,
    meta: {
      title: 'About'
    }
  }, {
    path: '/*',
    component: Index,
    meta: {
      title: 'Index'
    }
  }
]
export const router = new Router({ mode: 'history', routes })
