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
  import { getPosts } from '~/service/api.js';
  export default {
    data() {
      return {
        posts: []
      }
    },
    // async asyncData () {
    //   debugger;
    //   let res = await axios.get('http://127.0.0.1:7001/api/post');
    //   debugger;
    //   return {
    //     posts: res
    //   }
    // },
    mounted() {
      getPosts().then(res => {
        let posts = res.data.result.map(v => {
          let updatedAt = v.updated_at;
          v.updated_at = stamp(new Date(updatedAt));
          return v;
        })
        this.posts = posts;
      })
      // this.posts =  [
      //   {
      //     id: 1,
      //     title: '文章一',
      //     created_at: '2018-10-1 10:10',
      //     modified_at: '2018-10-1 10:10',
      //     picture: 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9',
      //     tags: [
      //       {
      //         id: 1,
      //         title: '标签一'
      //       },
      //       {
      //         id: 2,
      //         title: '标签二'
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     title: '文章二',
      //     created_at: '2018-10-1 10:10',
      //     modified_at: '2018-10-1 10:10',
      //     picture: 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9',
      //     tags: [
      //       {
      //         id: 1,
      //         title: '标签一'
      //       },
      //       {
      //         id: 2,
      //         title: '标签二'
      //       }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     title: '文章三',
      //     created_at: '2018-10-1 10:10',
      //     modified_at: '2018-10-1 10:10',
      //     picture: 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9',
      //     tags: [
      //       {
      //         id: 1,
      //         title: '标签一'
      //       },
      //       {
      //         id: 2,
      //         title: '标签二'
      //       }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     title: '文章四',
      //     created_at: '2018-10-1 10:10',
      //     modified_at: '2018-10-1 10:10',
      //     picture: 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9',
      //     tags: [
      //       {
      //         id: 1,
      //         title: '标签一'
      //       },
      //       {
      //         id: 2,
      //         title: '标签二'
      //       }
      //     ]
      //   },
      //   {
      //     id: 5,
      //     title: '文章五',
      //     created_at: '2018-10-1 10:10',
      //     modified_at: '2018-10-1 10:10',
      //     picture: 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9',
      //     tags: [
      //       {
      //         id: 1,
      //         title: '标签一'
      //       },
      //       {
      //         id: 2,
      //         title: '标签二'
      //       }
      //     ]
      //   },
      // ]
    }
  }
</script>
