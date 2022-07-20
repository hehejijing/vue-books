<template>
  <div class="box">
    <input ref="ss" @keyup.enter="searchFn" type="search" placeholder="搜索—书本名称" style="padding-left: 10px;height:30px;padding-right: 10px">
    <!-- <button @click="btn">删除</button> -->
    <el-table :data="list" style="width: 100% ;margin-top:10px" :border="true" >
      <el-table-column label="序号" prop="id" min-width="15%">
      </el-table-column>
      <el-table-column label="书名" prop="bookname" min-width="20%">
      </el-table-column>
      <el-table-column label="作者" prop="author" min-width="20%">
      </el-table-column>
      <el-table-column label="出版社" prop="publisher" min-width="25%">
      </el-table-column>
      <el-table-column label="操作" prop="name" min-width="20%">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
        </template></el-table-column
      >
    </el-table>
  </div>
</template>

<script>
// import searchList from "./book-search.vue"
export default {

  data() {
    return {
      tableHeader: {
        id: "序号",
        bookname: "书名",
        author: "作者",
        publisher: "出版社",
      },
      tableData: [],
      search: "",
      list1 : this.list
      
    };
  },
  mounted() {
    this.tableData = this.ist;
    // console.log(this.tableData);
  },
  methods: {

    //批量删除

    // btn() {
    //     for(let i = 2000; i< 3000; i++) {
    //       this.$axios({
    //         url: "/api/delbook",
    //         params: {
    //           id: i,
    //         }
    //     })
    //     }
    // },
    //查看书籍详情

    //搜索
    searchFn() {
    // console.log(this.list);
    // console.log(this.$refs.ss.value);
    if (!this.$refs.ss.value.trim()){
      return alert("不会打字？");
    }
     const showList = this.list.filter((obj) => obj.bookname == this.$refs.ss.value)
     if (showList.length <1 ){
        return alert("暂无数据，请确认书名是否正确")
     } 
     else {

    // console.log(this.list);
    // console.log(showList);
    }
    
  },
    handleEdit(index, row) {
      this.$alert(
        `
          <div style="text-align:center">
          <h3 >书籍详情</h3>
          序号 : <input type="text" value=${row.id} readOnly=true><br><br>
          书名 : <input type="text" value=${row.bookname} readOnly=true><br><br>
          作者 : <input type="text" value=${row.author} readOnly=true><br><br>
          出版社 : <input type="text" value=${row.publisher} readOnly=true><br></div>`,
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
    //删除书籍
    handleDelete(index, row) {
      // console.log(row.id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          
          this.$axios({
            url: "/api/delbook",
            params: {
              id: row.id,
            },
          }).then((res) =>{             
            alert(res.data.msg)
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  props: ["list"]
};
</script>
<style scoped>
.box {
  width: 80%;
  margin: 0 auto;
}
</style>
