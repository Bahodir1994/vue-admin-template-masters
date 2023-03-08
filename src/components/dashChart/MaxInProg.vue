<template>
  <apexchart height="200" type="radialBar" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: "MaxInProg",
  data: function () {
    return {
      chartOptions: {
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
      series: [37],

    }
  },
}
</script>

<style scoped>

</style>
