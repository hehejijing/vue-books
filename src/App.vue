<template>
  <div width="60%">
    <bookList
      :list="list"
      @getList="getList"
      @searchFn="searchFn"
    ></bookList
    ><br />
    <bookLAdd @getList="getList"></bookLAdd>
  </div>
</template>

<script>
import bookList from "./components/book-list.vue";
import bookLAdd from "./components/book-add.vue";

export default {
  name: "App",
  data() {
    return {
      list: [],
    };
  },
  components: {
    bookList,
    bookLAdd,
  },
  methods: {
    //获取数据
    getList() {
      this.$axios({
        url: "/api/getbooks",
      }).then((res) => {
        this.list = res.data.data;
        // console.log(this.list);
      });
    },
    searchFn(val) {
      console.log(val);
      this.list = val
      // console.log(this.list);
    },
  },

  //页面初始化

  created() {
    this.getList();
  },
  // watch: {
  //   searchFn(val){
  //     if(val){
  //       this.list = val
  //       this.getList()
  //     }
  //   }
  // }
};
</script>

<style></style>
