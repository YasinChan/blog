<template>
  <div class="rightPost box-shadow-class">
    <div class="rightImg">
      <img :src="blogInfo.picture" alt="">
      <div class="postTitle">
        <h1>{{ blogInfo.title }}</h1>
      </div>
    </div>
    <div class="postInfo">
      {{ blogInfo.created_at }}
    </div>
    <div class="postMain" v-html="blogInfo.rendered"></div>
    <div class="tag">
      <nuxt-link class="rightTag" v-for="tagItem in blogInfo.tags" :to="`/tag/${tagItem.id}`" :key="tagItem.id">{{tagItem.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
  import tinydate from 'tinydate';
  const stamp = tinydate('{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}');
  import { getPostById } from '~/service/api.js';
  export default {
    data() {
      return {
        blogInfo: {}
      }
    },
    // asyncData ({ store, params }) {
    //   debugger;
    //   getPostById(params.id).then(res => {
    //     debugger;
    //   })
    // },
    mounted() {
      getPostById(this.$route.params.id).then(res => {
        let result = res.data.result
        result.created_at = stamp(new Date(result.created_at))
        result.updated_at = stamp(new Date(result.updated_at))
        this.blogInfo = result;
      })
    }
  }
</script>

<style scoped>
.tag {
  text-align: right;
  padding-top: 10px;
}
</style>
