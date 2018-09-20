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
            <nuxt-link to="/tag/1" class="leftTag">标签一</nuxt-link>
            <nuxt-link to="/tag/2" class="leftTag">标签二</nuxt-link>
            <nuxt-link to="/tag/3" class="leftTag">标签三</nuxt-link>
            <nuxt-link to="/tag/4" class="leftTag">标签四</nuxt-link>
            <nuxt-link to="/tag/5" class="leftTag">标签五</nuxt-link>
            <nuxt-link to="/tag/6" class="leftTag">标签六</nuxt-link>
          </div>
        </div>
      </div>
      <div class="right">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
</style>

