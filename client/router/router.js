import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/index.vue'
import Post from 'views/post.vue'
import Song from 'views/song.vue'
import Archive from 'views/archive.vue'
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
    path: '/post/:language',
    component: Post,
    meta: {
      title: 'Post'
    }
  }, {
    path: '/song/:language',
    component: Song,
    meta: {
      title: 'Song'
    }
  }, {
    path: '/archive/:language',
    component: Archive,
    meta: {
      title: 'Archive'
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
