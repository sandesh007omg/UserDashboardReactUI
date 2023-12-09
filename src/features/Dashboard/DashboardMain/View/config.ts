import { convertToTitle } from "../../../../common/helpers";
import { DASHBOARD } from "../../../../constants/navigationMenu";

const DASHBOARD_TITLE = convertToTitle(DASHBOARD);
export const tableProps = {
  rowHeight: 30,
  tableColumns: [
    { label: "SN", id: "sn", width: 100 },
    { label: "Id", id: "id", width: 100 },
    { label: "Name", id: "name", width: 200 },
    { label: "Username", id: "userName", width: 100 },
    { label: "Subscribe", id: "subscribed", width: 100 },
    { label: "Email", id: "email", width: 300 },
    { label: "Status", id: "status", width: 100 },
    { label: "Join Date", id: "joinDate", width: 100 },
    { label: "Country", id: "country", width: 200 },
    { label: "Address", id: "address", width: 200 },
  ],
};
export const STATUS_LIST = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
export const chartData = {
  series: [76, 67, 61, 90, 20, 30],
  options: {
    chart: {
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5", "#000000", "#0b5fff"],
    labels: [
      "Plan1",
      "Plan 2",
      "Plan 3",
      "Plan 6",
      "Plan 12",
      "Plan unlimited",
    ],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName: any, opts: any) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};

export { DASHBOARD_TITLE };
