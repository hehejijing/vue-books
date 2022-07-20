<template>
  <div width="60%">
    
    <bookList :list="list" ></bookList><br>
    <bookLAdd></bookLAdd>
  </div>
</template>

<script>
import bookList from "./components/book-list.vue"
import bookLAdd from "./components/book-add.vue"

export default {
  name: 'App',
  data() {
    return {
      list :[],
      showList:[]
    }
  },
  components: {
    bookList,
    bookLAdd
  },
  methods:{

  },

  //页面初始化

  created () {
    this.$axios({
      url:"/api/getbooks",
    }).then(res => {
      this.list = res.data.data
      // console.log(this.list);
    })
  },

  //用于在删除或增加数据后自动渲染页面
  updated(){
    this.$axios({
      url:"/api/getbooks",
    }).then(res => {
      this.list = res.data.data
      // console.log(this.list);
    })
  }
}
</script>

<style></style>
