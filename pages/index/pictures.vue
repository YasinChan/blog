<template>
  <div class="rightPic box-shadow-class">
    <div class="imageList">
      <div @click="showPic(item)" class="imgLi" v-for="item in pictures" :key="item.id">
        <img class="image" v-lazy="item.url" alt="">
      </div>
    </div>
    <modal height="auto" width="60%" :scrollable="true" name="hello-world">
      <div style="padding: 10px;">
        <img style="width: 100%;" :src="showImage" alt="">
        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed">{{ showTime }}</div>
      </div>
    </modal>
  </div>
</template>

<script>
  import {getUploads} from '~/service/api.js';
  import tinydate from "tinydate";

  const stamp = tinydate("{YYYY}-{MM}-{DD}");
  export default {
    name: "pictures",
    data() {
      return {
        pictures: [],
        showImage: "https://qiniu.yasinchan.com/image/default2.jpg",
        showTime: "2018-10-1"
      }
    },
    mounted() {
      getUploads().then( res => {
        let result = res.data.result;
        result.forEach(v => {
          v.updated_at = stamp(new Date(v.updated_at));
          v.created_at = stamp(new Date(v.created_at));
        })
        this.pictures = result
      })
    },
    methods: {
      showPic(e) {
        this.showImage = e.url;
        this.showTime = stamp(new Date(e.updated_at))
        this.$modal.show('hello-world');
      }

    }
  }
</script>

<style scoped>
.v--modal {
  background-color: transparent;
}
</style>
