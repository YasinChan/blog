<template>
  <ul class="rightAllUl">
    <li class="rightAllLi box-shadow-class">
      <nuxt-link to="/post/1">
        <div class="rightImg">
          <img src="~static/images/yourname.jpg" alt="">
        </div>
      </nuxt-link>
      <div class="rightTitle">
        <nuxt-link to="/post/1">
          <h3>第一个标题</h3>
        </nuxt-link>
        <nuxt-link to="/tag/1" class="rightTag">标签一</nuxt-link>
        <nuxt-link to="/tag/4" class="rightTag">标签四</nuxt-link>
      </div>
    </li>
    <li class="rightAllLi box-shadow-class">
      <nuxt-link to="/post/2">
        <div class="rightImg">
          <img src="~static/images/yourname.jpg" alt="">
        </div>
      </nuxt-link>
      <div class="rightTitle">
        <nuxt-link to="/post/2">
          <h3>第一个标题</h3>
        </nuxt-link>
        <nuxt-link to="/tag/2" class="rightTag">标签二</nuxt-link>
      </div>
    </li>
    <li class="rightAllLi box-shadow-class">
      <nuxt-link to="/post/3">
        <div class="rightImg">
          <img src="~static/images/yourname.jpg" alt="">
        </div>
      </nuxt-link>
      <div class="rightTitle">
        <nuxt-link to="/post/3">
          <h3>第一个标题</h3>
        </nuxt-link>
        <nuxt-link to="/tag/3" class="rightTag">标签三</nuxt-link>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "_id"
  }
</script>

<style scoped>

</style>
