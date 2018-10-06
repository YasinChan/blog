<template>
  <div class="note-right box-shadow-class">
    <div class="note-border"></div>
    <div class="note-content" v-for="item in notes" :key="item.id">
      <div class="topBall">
        <div class="note-year">{{ item.created_at[0] }}</div>
        <div class="note-md">{{ item.created_at[1] }}</div>
      </div>
      <div class="note">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notes",
    data() {
      return {
        notes: []
      }
    },
    head () {
      return {
        title: "便签",
        meta: [
          { hid: 'description', name: 'description', content: '我的便签' }
        ]
      }
    },
    mounted() {
      let data =   [
        {
          id: 1,
          created_at: "2018-10.1",
          content: "第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签"
        },
        {
          id: 2,
          created_at: "2018-10.2",
          content: "第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签"
        },
        {
          id: 3,
          created_at: "2018-10.3",
          content: "第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签"
        },
        {
          id: 4,
          created_at: "2018-10.4",
          content: "第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签第一个便签"
        },
      ]
      this.notes = data.map(v => {
        v.created_at = v.created_at.split('-')
        return v
      })
      console.log(this.notes)
    }
  }
</script>

<style scoped>

</style>
