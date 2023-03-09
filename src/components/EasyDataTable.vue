<template>
  <ve-table :columns="columns" :table-data="tableData" :sort-option="sortOption" :max-height="450" :virtual-scroll-option="virtualScrollOption" border-y />
</template>

<script>
export default {
  data() {
    return {
      sortOption: {
        multipleSort: true,
        sortChange: (params) => {
          console.log("sortChange::", params);
          this.sortChange(params);
        },
      },
      columns: [
        {
          field: "appName",
          key: "aname",
          title: "Дастур номи",
          align: "left"
        },
        {
          field: "totalUsers",
          key: "tUsers",
          title: "Жами фойдаланувчилар",
          align: "center",
          sortBy: "",
        },
        {
          field: "activeUsers",
          key: "aUsers",
          title: "Онлайн фойдаланувчилар",
          align: "center",
          sortBy: "asc",
        },
        {
          field: "workTime",
          key: "workTime",
          title: "Ишлаш вақти",
          align: "center",
        }
      ],
      tableData: [
        {
          appName: "ЯААТ дастури",
          totalUsers: 520,
          activeUsers: 66,
          workTime: null
        },
        {
          appName: "E-транзит",
          totalUsers: 856,
          activeUsers: 42,
          workTime: null
        },
        {
          appName: "E-Мурожаат ААТ",
          totalUsers: 742,
          activeUsers: 150,
          workTime: null
        },
        {
          appName: "SEDO",
          totalUsers: 4000,
          activeUsers: 3520,
          workTime: null
        }
      ],
    };
  },
  methods: {
    sortChange(params) {
      let data = this.tableData.slice(0);
      data.sort((a, b) => {
        if (params.totalUsers) {
          if (params.totalUsers === "asc") {
            return a.totalUsers - b.totalUsers;
          } else if (params.totalUsers === "desc") {
            return b.totalUsers - a.totalUsers;
          } else {
            return 0;
          }
        }
      });
      data.sort((a, b) => {
        if (params.activeUsers) {
          if (params.activeUsers === "asc") {
            return a.activeUsers - b.activeUsers;
          } else if (params.activeUsers === "desc") {
            return b.activeUsers - a.activeUsers;
          } else {
            return 0;
          }
        }
      });
      this.tableData = data;
    },
  },
};
</script>

<style>
  th {
    background-color: #f7f7f8;
    color: #6b7c8c;
    border-right: 1px solid #CBD1D7;
  }
  th:hover {
    background-color: #cbd1d7!important;
  }
</style>
