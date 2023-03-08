<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex lg4 sm6 xs12 class=" rounded-lg elevation-1 bgColor2" style="border: 0px solid #0d47a1!important; border-radius: 0%!important;">
        <apexchart height="300" type="area" :options="chart7" :series="series7"></apexchart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs6 class=" rounded-lg elevation-1 bgColor2" style="border: 0px solid #0d47a1!important; border-radius: 0%!important;">
        <apexchart height="300" type="area" :options="chart1" :series="series1"></apexchart>
      </v-flex>
      <v-flex d-flex lg4 sm6 xs12 class=" rounded-lg elevation-1 bgColor2" style="border: 0px solid #0d47a1!important; border-radius: 0%!important;">
        <apexchart  type="bar" :options="chart6" :series="series6"></apexchart>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs6 class=" rounded-lg elevation-1 bgColor2" style="border: 0px solid #0d47a1!important; border-radius: 0%!important;">
        <easy-data-table></easy-data-table>
      </v-flex>
      <v-flex d-flex lg6 sm6 xs6 class=" rounded-lg elevation-1 bgColor2" style="border: 0px solid #0d47a1!important; border-radius: 0%!important;">
        <easy-data-table></easy-data-table>
      </v-flex>
      <!-- Statistics Ends -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Vue Chart',
  theme: {
    defaultTheme: 'dark'
  },
  data: function () {
    return {
      chart1: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          type: 'line',
          stacked: false,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'XYZ - Stock Analysis (2009 - 2016)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016 , 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            // title: {
            //   text: "Income (thousand crores)",
            //   style: {
            //     color: '#008FFB',
            //   }
            // },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            // title: {
            //   text: "Operating Cashflow (thousand crores)",
            //   style: {
            //     color: '#00E396',
            //   }
            // },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Revenue (thousand crores)",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40,
        },
        series: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
          {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        },
          {
          name: 'Revenue',
          type: 'line',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }],
      },
      series1: [{
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Cashflow',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }, {
        name: 'Revenue',
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }],

      chart2: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          height: 600,
          type: "radialBar"
        },
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "60%",
              background: "#293450"
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "13px"
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Progress"],
      },
      series2: [37],

      chart3: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '50%',
            barHeight: '50%',
          }
        },
        colors: ["#1268da"],
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#020f5e"],
          }
        },
        stroke: {
          lineCap: "round"
        },
      },
      series3: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }]
      }],

      chart4: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          height: 600,
          type: "radialBar",
        },
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "60%",
              background: "#293450"
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "13px"
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Progress"],
      },
      series4: [37],

      chart5: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          type: 'bar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '50%',
            barHeight: '50%',
          }
        },
        colors: ["#1268da"],
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ["#020f5e"],
          }
        },
        stroke: {
          lineCap: "round"
        },
      },
      series5: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }]
      }],


      chart6: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          type: 'bar',
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom'
            },
          }
        },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
          '#f48024', '#69d2e7'
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff']
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'India'
          ],
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true
        },
        subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return ''
              }
            }
          }
        }
      },
      series6: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],

      chart7: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          height: 350,
          type: 'line'
        },
        stroke: {
          width: [0, 4]
        },
        title: {
          text: 'Traffic Sources'
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
          type: 'datetime'
        },
        yaxis: [{
          title: {
            text: 'Website Blog',
          },

        }, {
          opposite: true,
          title: {
            text: 'Social Media'
          }
        }]
      },
      series7: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],

      chart8: {
        theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
            enabled: false,
            color: '#1268da',
            shadeTo: 'dark',
            shadeIntensity: 0.65
          },
        },
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            customScale: 0.8
          }
        },
        dataLabels: {
          enabled: true,
        }
      },
      series8: [44, 55, 41, 17, 15],

    }
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      // In the same way, update the series option
      this.series = [{
        data: newData
      }]
    }
  }
}


</script>

<style>
.table-pagination {
  margin-top: 20px;
  text-align: right;
}

.bgColor1 {
  background: #DC2424;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.bgColor2 {
  background: #fdfdfe !important;
  /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,45,107,1) 100%, rgba(0,212,255,1) 100%)!important;*/
}
</style>
