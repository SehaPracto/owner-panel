<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import "chart.js/auto";

export default {
  name: "BarChart",
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Augest",
          "September",
          "October",
          "November",
          "December",
        ],

        datasets: [
          {
            label: "User register graph",
            data: [20, 45, 155, 389, 388, 750, 548, 564, 711, 935, 788, 982],
            backgroundColor: "#3f4394",
            borderColor: "#3f4394",
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: false,
      },
    };
  },
};
</script>

<style>
</style>