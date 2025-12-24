<template>
  <div class="tablebox">
    <div class="searchbox">
      <!-- 搜索框内容可以在这里添加 -->
      <el-input
          placeholder="输入名称进行搜索"
          v-model="searchQuery"
          @keyup.enter="filterTable"
          style="width: 200px; margin-right: 10px;"
      ></el-input>
      <el-button @click="filterTable">搜索</el-button>
      <el-button type="primary" @click="sendEmail">联系我们</el-button>
    </div>
    <div class="tablelist">
      <el-table :data="paginatedData" stripe border lazy="true" style="width: 100%; height: 77vh;">
        <el-table-column label="名字" prop="name" fixed="left"></el-table-column>
        <el-table-column
            prop="type"
            label="类型"
            :filters="[
              { text: '武器', value: '武器' },
              { text: '护甲', value: '护甲' },
              { text: '法杖', value: '法杖' },
              { text: '戒指', value: '戒指' },
              { text: '神器', value: '神器' },
              { text: '炼金', value: '炼金' },
              { text: '饰品', value: '饰品' },
              { text: '怪物和NPC', value: '怪物和NPC' },
              { text: '杂项1', value: '杂项1' },
              { text: '杂项2', value: '杂项2' },
            ]"
            :filter-method="filterTag"
            filter-placement="bottom-end"
        >
        </el-table-column>
        <el-table-column
            label="图片"
        >
          <template #default="scope">
            <el-image style="width: 60px; height: 60px" :src="scope.row.url" fit="fit" />
          </template>
        </el-table-column>
        <el-table-column label="力量需求" sortable prop="llxq"></el-table-column>
        <el-table-column label="期望面板" sortable prop="qwmb"></el-table-column>
        <el-table-column label="期望成长" sortable prop="qwcz"></el-table-column>
        <el-table-column label="精准修正" sortable prop="jzxz"></el-table-column>
        <el-table-column label="单轮攻次" sortable prop="dlgc"></el-table-column>
        <el-table-column label="攻击距离" sortable prop="gjjl"></el-table-column>
      </el-table>
    </div>
<!-- 分页-->
    <div class="pagination">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="filteredTableData.length"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableList',
  data() {
    return {
      searchQuery: '',
      filteredTableData: [],
      tableData: [
        { name: "破损的短剑", type: "武器", url: "/images/weapons/part-Slice67.png", llxq: "10", qwmb: "5.5", qwcz: "1.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "镶钉手套", type: "武器", url: "/images/weapons/part-Slice68.png", llxq: "10", qwmb: "3", qwcz: "1", jzxz: "1", dlgc: "2", gjjl: "1" },
        { name: "匕首", type: "武器", url: "/images/weapons/part-Slice70.png", llxq: "10", qwmb: "4.5", qwcz: "1.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "魔杖", type: "武器", url: "/images/weapons/part-Slice71.png", llxq: "10", qwmb: "3.5", qwcz: "1.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "刺剑", type: "武器", url: "/images/weapons/part-Slice69.png", llxq: "10", qwmb: "4.5", qwcz: "1.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "短剑", type: "武器", url: "/images/weapons/part-Slice72.png", llxq: "12", qwmb: "8.5", qwcz: "2", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "手斧", type: "武器", url: "/images/weapons/part-Slice73.png", llxq: "12", qwmb: "7", qwcz: "2", jzxz: "1.32", dlgc: "1", gjjl: "1" },
        { name: "长矛", type: "武器", url: "/images/weapons/part-Slice74.png", llxq: "12", qwmb: "11", qwcz: "2.5", jzxz: "1", dlgc: "0.67", gjjl: "2" },
        { name: "铁头棍", type: "武器", url: "/images/weapons/part-Slice75.png", llxq: "12", qwmb: "7", qwcz: "2", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "长匕首", type: "武器", url: "/images/weapons/part-Slice76.png", llxq: "12", qwmb: "7", qwcz: "2", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "短柄镰", type: "武器", url: "/images/weapons/part-Slice77.png", llxq: "12", qwmb: "11", qwcz: "2", jzxz: "0.68", dlgc: "1", gjjl: "1" },
        { name: "单手剑", type: "武器", url: "/images/weapons/part-Slice78.png", llxq: "14", qwmb: "11.5", qwcz: "2.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "硬头锤", type: "武器", url: "/images/weapons/part-Slice79.png", llxq: "14", qwmb: "9.5", qwcz: "2.5", jzxz: "1.28", dlgc: "1", gjjl: "1" },
        { name: "弯刀", type: "武器", url: "/images/weapons/part-Slice80.png", llxq: "14", qwmb: "9.5", qwcz: "2.5", jzxz: "1", dlgc: "1.25", gjjl: "1" },
        { name: "圆盾", type: "武器", url: "/images/weapons/part-Slice81.png", llxq: "14", qwmb: "7.5", qwcz: "1.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "双钗", type: "武器", url: "/images/weapons/part-Slice82.png", llxq: "14", qwmb: "6.5", qwcz: "1.5", jzxz: "1", dlgc: "2", gjjl: "1" },
        { name: "长鞭", type: "武器", url: "/images/weapons/part-Slice83.png", llxq: "14", qwmb: "9", qwcz: "2", jzxz: "1", dlgc: "1", gjjl: "3" },
        { name: "武士刀", type: "武器", url: "/images/weapons/part-Slice90.png", llxq: "16", qwmb: "12", qwcz: "3", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "长剑", type: "武器", url: "/images/weapons/part-Slice84.png", llxq: "16", qwmb: "14.5", qwcz: "3", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "战斧", type: "武器", url: "/images/weapons/part-Slice85.png", llxq: "16", qwmb: "12", qwcz: "3", jzxz: "1.24", dlgc: "1", gjjl: "1" },
        { name: "链枷", type: "武器", url: "/images/weapons/part-Slice86.png", llxq: "16", qwmb: "19.5", qwcz: "4.5", jzxz: "0.8", dlgc: "1", gjjl: "1" },
        { name: "符文之刃", type: "武器", url: "/images/weapons/part-Slice87.png", llxq: "16", qwmb: "12", qwcz: "3.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "暗杀之刃", type: "武器", url: "/images/weapons/part-Slice88.png", llxq: "16", qwmb: "12", qwcz: "3", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "十字弩", type: "武器", url: "/images/weapons/part-Slice89.png", llxq: "16", qwmb: "12", qwcz: "2.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "巨剑", type: "武器", url: "/images/weapons/part-Slice91.png", llxq: "18", qwmb: "17.5", qwcz: "3.5", jzxz: "1", dlgc: "1", gjjl: "1" },
        { name: "战锤", type: "武器", url: "/images/weapons/part-Slice92.png", llxq: "18", qwmb: "14.5", qwcz: "3.5", jzxz: "1.2", dlgc: "1", gjjl: "1" },
        { name: "关刀", type: "武器", url: "/images/weapons/part-Slice93.png", llxq: "18", qwmb: "22.5", qwcz: "3.5", jzxz: "0.8", dlgc: "1", gjjl: "1" },
        { name: "巨斧", type: "武器", url: "/images/weapons/part-Slice94.png", llxq: "20", qwmb: "25", qwcz: "3.5", jzxz: "1", dlgc: "1", gjjl: "1" },


      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredTableData.slice(start, end);
    }
  },
  methods: {
    //联系我们
    sendEmail() {
      window.location.href = 'https://mail.qq.com/cgi-bin/loginpage';
    },
    filterTag(value, row, column) {
      return row.type === value;
    },
    filterTable() {
      const query = this.searchQuery.toLowerCase();
      this.filteredTableData = this.tableData.filter(item => item.name.toLowerCase().includes(query));
      this.currentPage = 1; // 搜索后重置当前页
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    }
  },
  mounted() {
    this.filteredTableData = this.tableData;
  }
};
</script>

<style scoped lang="less">
.tablebox {
  width: 100%;
  height: 90vh;

  .searchbox {
    padding: 10px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
}
</style>
