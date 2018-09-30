<template>
  <div>
    <div class="topPic">
    </div>
    <div class="container">
      <div class="top">
        <div class="avatar">
          <img src="~static/images/avatar.png" alt="">
        </div>
        <h3 class="nickname">Yasinchan</h3>
      </div>
      <div class="left">
        <div class="leftCategory box-shadow-class">
          <nuxt-link to="/" class="left-btn">文章</nuxt-link>
          <nuxt-link to="/pictures" class="left-btn">相册</nuxt-link>
          <nuxt-link to="/notes" class="left-btn">便签</nuxt-link>
          <nuxt-link to="/about" class="left-btn">关于</nuxt-link>
        </div>
        <div class="leftTags box-shadow-class">
          <div class="tagTitle">标签</div>
          <div class="leftTagWrap">
            <nuxt-link class="leftTag" v-for="item in tags" :to="`/tag/${item.id}`" :key="item.id">{{item.title}}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="right">
        <transition>
          <nuxt-child/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tags: [],
    }
  },
  mounted() {
    // TODO 请求 tags
    this.tags = [
      {
        id: 1,
        title: '标签一'
      },
      {
        id: 2,
        title: '标签二'
      },
      {
        id: 3,
        title: '标签三'
      },
      {
        id: 4,
        title: '标签四'
      },
      {
        id: 5,
        title: '标签五'
      },
    ]
  }
}
</script>

<style scoped>
  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .1s;*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
    /*opacity: 0;*/
  /*}*/
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }
  .page-enter, .page-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    transform: translateY(5px);
    opacity: 0;
  }
</style>

