<template>
  <div>
    <ve-table
      :columns="columns"
      :table-data="tableData"
      :max-height="300"
      :virtual-scroll-option="virtualScrollOption"
      row-key-field-name="rowKey"
      class="table"
      :cell-style-option="cellStyleOption"
    />
    <div class="table-pagination">
      <ve-pagination
        :total="totalCount"
        :page-index="pageIndex"
        @on-page-number-change="pageNumberChange"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<style>
.table-body-cell-class {
  background: #91d5ff !important;
  color: #fff !important;
}
.table-pagination {
  margin-top: 20px;
  text-align: right;
  height: 15px!important;
}
th {
  background: #86afc7 !important;
  color: #070707 !important;
}
</style>

<script>
// Simulation table data from database
import Vue from "vue";
// import "vue-easytable/libs/theme-default/index.css"; // import style
// import "vue-easytable/libs/theme-dark/index.css";

import { VeTable, VePagination, VeIcon, VeLoading, VeLocale } from "vue-easytable"; // import library

Vue.use(VeTable);
Vue.use(VePagination);
Vue.use(VeIcon);
Vue.use(VeLoading);

Vue.prototype.$veLoading = VeLoading;
Vue.prototype.$veLocale = VeLocale;
let DB_DATA = [];

export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      virtualScrollOption: {
        enable: true,
      },
      columns: [
        {field: "", key: "a", title: "#", align: "center",
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
          },
        },
        { field: "name", key: "b", title: "Name", align: "center" },
        { field: "date", key: "c", title: "Date", align: "left" },
        { field: "hobby", key: "d", title: "Hobby", align: "left" },
        { field: "address", key: "e", title: "Address", width: "" },
      ],
    };
  },
  computed: {
    // table data
    tableData() {
      const { pageIndex, pageSize } = this;
      return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    },
    // total count
    totalCount() {
      return DB_DATA.length;
    },
  },
  methods: {
    // page number change
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },

    // page size change
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },

    // Simulation table data
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 50; i++) {
        DB_DATA.push({
          name: "John" + i,
          date: "1900-05-20",
          hobby: "coding and coding repeat" + i,
          address: "No.1 Century Avenue, Shanghai" + i,
        });
      }
    },
  },
  created() {
    this.initDatabase();
  },
};
</script>
