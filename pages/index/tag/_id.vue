<template>
  <ul class="rightAllUl">
    <li class="rightAllLi box-shadow-class" v-for="item in posts" :key="item.id">
      <nuxt-link :to="`/post/${item.id}`">
        <div class="rightImg">
          <img class="image" v-lazy="item.picture" alt="">
          <div class="postTitle">
            <h1>{{ item.title }}</h1>
          </div>
        </div>
      </nuxt-link>
      <div class="rightTitle">
        <span style="float: left;">{{ item.created_at }}</span>
        <nuxt-link class="rightTag" v-for="tagItem in item.tags" :to="`/tag/${tagItem.id}`" :key="tagItem.id">{{tagItem.name}}</nuxt-link>
      </div>
    </li>
  </ul>
</template>
<script>
  import tinydate from 'tinydate';
  const stamp = tinydate('{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}');
  import { getPostsByTagId } from '~/service/api.js';
  export default {
    data() {
      return {
        posts: []
      }
    },
    async asyncData ({ store, params }) {
      let res = await getPostsByTagId(params.id)
      // getPostsByTagId(params.id).then(res => {
      //   debugger;
      //   console.log(res);
      //   return {
      //     posts: res.data.result
      //   }
      // })
      let result = res.data.result
      result.forEach(v => {
        v.created_at = stamp(new Date(v.created_at))
        v.updated_at = stamp(new Date(v.updated_at))
      })
      return {
        posts: result
      }
    },
    mounted() {
      getPostsByTagId(this.$route.params.id).then(res => {
        let result = res.data.result
        result.forEach(v => {
          v.created_at = stamp(new Date(v.created_at))
          v.updated_at = stamp(new Date(v.updated_at))
        })
        this.posts = result;
      })
    }
  }
</script>
