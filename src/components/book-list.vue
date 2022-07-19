<template>
  <div>
    <el-table :data="list" style="width: 100%" >
    <el-table-column label="序号" prop="id" > </el-table-column>
    <el-table-column label="书名" prop="bookname"> </el-table-column>
    <el-table-column label="作者" prop="author"> </el-table-column>
    <el-table-column label="出版社" prop="publisher"> </el-table-column>
    <el-table-column label="操作" prop="name"> <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >详情</el-button
        >
      </template></el-table-column>
    
  </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeader: {
        id : "序号",
        bookname:"书名",
        author:"作者",
        publisher:"出版社"
        
      },
      tableData: [],
      search: "",
    };
  },
  mounted() {
    this.tableData = this.ist
    console.log(this.tableData);
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  props: ["list"]
  
};
</script>
