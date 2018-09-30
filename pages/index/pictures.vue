<template>
  <div class="rightPic box-shadow-class">
    <div v-for="item in pictures" :key="item.id">
      <p>{{item.time}}</p>
      <div class="imageList">
        <div class="imgLi" v-for="(urlItem, index) in item.picturesUrl" :key="index">
          <img class="image" v-lazy="urlItem" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import nanoid from 'nanoid';
  export default {
    name: "pictures",
    data() {
      return {
        pictures: []
      }
    },
    mounted() {
      console.log(`nanoid:${nanoid(4)}`)
      this.pictures = [
        {
          id: 1,
          time: '2018-10-1 10:10',
          picturesUrl: ['https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9']
        },
        {
          id: 2,
          time: '2018-10-1 10:10',
          picturesUrl: ['https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9']
        },
        {
          id: 3,
          time: '2018-10-1 10:10',
          picturesUrl: ['https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9']
        },
        {
          id: 4,
          time: '2018-10-1 10:10',
          picturesUrl: ['https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9', 'https://cdn.hk01.com/di/media/images/283771/org/a5e88eeda6f08f933c4c6bbad9d9fc8b.png/9oJBcT5ZtUBuJsxIaPdioasXmSOmYWRDwbT7QcG0-0E?v=w1920r16_9']
        },
      ]
    }
  }
</script>

<style scoped>

</style>
