module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  head: {
    title: 'Yasinchan Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'yasinchan Blog，陈耀耀的博客' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/avatar.png' }
    ]
  },
  css: [
    '~assets/index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: ['~/plugins/vue-lazy', '~plugins/vue-js-modal']
}

