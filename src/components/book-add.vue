<template>
  <div style="margin-left: 50px">
    <el-input
      placeholder="书名"
      v-model="bookname"
      clearable
      style="width: 300px; display: block"
    >
    </el-input
    ><br />
    <el-input
      placeholder="作者"
      v-model="author"
      clearable
      style="width: 300px; display: block"
    >
    </el-input
    ><br />
    <el-input
      placeholder="出版社"
      v-model="publisher"
      clearable
      style="width: 300px; display: block"
    >
    </el-input
    ><br />
    <el-button @click="Add" type="primary" plain style="width: 100px"
      >新增</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      bookname: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    Add() {
      if (!this.bookname.trim()) {
        return alert("请输入书名");
      } else if (!this.author.trim()) {
        return alert("请输入作者名");
      } else if (!this.publisher.trim()) {
        return alert("请输入出版社名");
      } else {
        let data = {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        };
        console.log(data);
        this.$axios({
          url: "/api/addbook",
          method: "post",
          data,
        }).then(() => {
          (this.bookname = ""), (this.author = ""), (this.publisher = "");
        });
      }
    },
  },
};
</script>

<style></style>
