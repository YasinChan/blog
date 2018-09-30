import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://www.baidu.com/img/bd_logo1.png?where=super',
  loading: 'https://i0.wp.com/abhishekkothari.in/wp-content/uploads/2017/10/loading-logo.png?resize=396%2C307&ssl=1',
  attempt: 1
})
