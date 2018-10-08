import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://qiniu.yasinchan.com/image/default2.jpg',
  loading: 'https://qiniu.yasinchan.com/gif/ajax-loader.gif',
  // loading: require('~/static/images/avatar.png'),
  attempt: 1
})
