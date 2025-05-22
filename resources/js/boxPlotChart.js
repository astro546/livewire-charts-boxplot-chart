import { mergedOptionsWithJsonConfig } from "./helpers";

const boxPlotChart = () => {
    return {
        chart: null,

        init() {
            setTimeout(() => {
                this.drawChart(this.$wire);
            }, 0);
        },

        drawChart(component) {
            if (this.chart) {
                this.chart.destroy();
            }

            const title = component.get("boxPlotChartModel.title");
            const animated =
                component.get("boxPlotChartModel.animated") || false;
            const dataLabels =
                component.get("boxPlotChartModel.dataLabels") || {};
            const sparkline = component.get("boxPlotChartModel.sparkline");
            const jsonConfig = component.get("boxPlotChartModel.jsonConfig");
            const data = component.get("boxPlotChartModel.data");

            const series = [
                {
                    name: title,
                    type: "boxPlot",
                    data: data.map((item) => item.value),
                },
            ];

            const options = {
                series: series,

                chart: {
                    type: "boxPlot",
                    height: "100%",

                    ...sparkline,

                    animations: { enabled: animated },
                    toolbar: { show: false },

                    events: {
                        markerClick: function (event, chartContext, {}) {},
                    },
                },

                dataLabels: dataLabels,
                theme: component.get("boxPlotChartModel.theme") || {},

                title: {
                    text: title,
                    align: "left",
                },

                toolTip: {
                    y: {
                        formatter: function (value, series) {
                            return (
                                data[series.dataPointIndex].extras.tooltip ||
                                value
                            );
                        },
                    },
                },
            };

            this.chart = new ApexCharts(
                this.$refs.container,
                mergedOptionsWithJsonConfig(options, jsonConfig)
            );

            this.chart.render();
        },
    };
};
export default boxPlotChart;
