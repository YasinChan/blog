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
          <nuxt-link to="/posts" class="left-btn">关于</nuxt-link>
        </div>
        <div class="leftTags box-shadow-class">
          <div class="tagTitle">标签</div>
          <div class="leftTagWrap">
            <a class="leftTag">标签的</a>
            <a class="leftTag">标签的是</a>
            <a class="leftTag">标签</a>
            <a class="leftTag">标签的</a>
            <a class="leftTag">标签想</a>
            <a class="leftTag">标签</a>
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

