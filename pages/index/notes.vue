<template>
  <div class="note-right box-shadow-class">
    <div class="note-border"></div>
    <div class="note-content" v-for="item in notes" :key="item.id">
      <div class="topBall">
        <div class="note-year">{{ item.updated_at[0] }}</div>
        <div class="note-md">{{ item.updated_at[1] }}</div>
      </div>
      <div class="note">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { getNotes } from "~/service/api.js";

  import tinydate from "tinydate";

  const stamp = tinydate("{YYYY}-{MM}.{DD}");
  export default {
    name: "notes",
    head () {
      return {
        title: "便签",
        meta: [
          { hid: 'description', name: 'description', content: '我的便签' }
        ]
      }
    },
    async asyncData () {
      let res = await getNotes();
      let result = res.data.result
      result.forEach(v => {
        v.updated_at = stamp(new Date(v.updated_at));
        v.updated_at = v.updated_at.split('-')
      })
      return { notes: result }
    }
  }
</script>

<style scoped>

</style>
