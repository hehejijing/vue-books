<template>
  <div>
    <bookList :list="list"></bookList>
  </div>
</template>

<script>
import bookList from "./components/book-list.vue"
export default {
  name: 'App',
  data() {
    return {
      list :[]
    }
  },
  components: {
    bookList
  },
  created () {
    this.$axios({
      url:"/api/getbooks",
    }).then(res => {
      this.list = res.data.data
      console.log(this.list);
    })
  }
}
</script>

<style></style>
