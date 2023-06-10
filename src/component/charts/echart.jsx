import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";




function EChart(saleChart) {
  let {chart} = saleChart;
  useEffect(() => {
  }, [chart])


  return (
    <>
        <div id="chart">
          <ReactApexChart
            className="bar-chart"
            series={[
              {
                name: "Sales",
                data: chart.sale && chart.sale.length > 0 ?  chart.sale : [],
                color: "#fff",
              }
            ]}

            options={{
              chart: {
                type: "bar",
                width: "100%",
                height: "100%",

                toolbar: {
                  show: false,
                },
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "55%",
                  borderRadius: 5,
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 1,
                colors: ["transparent"],
              },
              grid: {
                show: true,
                borderColor: "#ccc",
                strokeDashArray: 2,
              },
              xaxis: {
                categories: chart.cat && chart.cat.length > 0 ?  chart.cat : [],
                labels: {
                  show: true,
                  align: "right",
                  minWidth: 0,
                  maxWidth: 160,
                  style: {
                    colors: [
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                    ],
                  },
                },
              },
              yaxis: {
                labels: {
                  show: true,
                  align: "right",
                  minWidth: 0,
                  maxWidth: 160,
                  style: {
                    colors: [
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                      "#fff",
                    ],
                  },
                },
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return "" + val + "";
                  },
                },
              },
            }}
            type="bar"
            height={350}
          />
        </div>
          </>
  );
}

export default EChart;
