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
        <span style="float: left;">{{ item.updated_at }}</span>
        <nuxt-link class="rightTag" v-for="tagItem in item.tags" :to="`/tag/${tagItem.id}`" :key="tagItem.id">{{tagItem.name}}</nuxt-link>
      </div>
    </li>
  </ul>
</template>
<script>
  import tinydate from 'tinydate';
  const stamp = tinydate('{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}');
  // import { getPosts } from '~/service/api.js';
  import axios from 'axios';
  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      axios.get('/api/post').then(res => {
        let posts = res.data.result.map(v => {
          let updatedAt = v.updated_at;
          v.updated_at = stamp(new Date(updatedAt));
          return v;
        })
        this.posts = posts;
      })
    }
  }
</script>

<style scoped>

</style>
