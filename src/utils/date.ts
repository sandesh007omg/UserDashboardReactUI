import moment from "moment";

const getStartOfCurrentMonth = () =>
  moment().startOf("month").format("DD MMM YYYY");

const getStartOfMonth = () => moment().startOf("month").format("MMM-YYYY");

const getEndOfCurrentMonth = () =>
  moment().endOf("month").format("DD MMM YYYY");

const getLastMonthStartDay = () =>
  moment().subtract(1, "months").startOf("month").format("DD MMM YYYY");

const getLastMonthEndDay = () =>
  moment().subtract(1, "months").endOf("month").format("DD MMM YYYY");

const getP3MStartDay = () =>
  moment().subtract(3, "months").format("DD MMM YYYY");

const getP6MStartDay = () =>
  moment().subtract(6, "months").format("DD MMM YYYY");

const getCurrentDay = (dateString = null) => {
  if (!dateString) {
    dateString = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kathmandu",
    });
  }

  return moment(
    new Date(dateString).toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  ).format("YYYY-MM-DD");

  //moment(new Date()).format('DD MMM YYYY')
};
export const getTodaysDay = () => moment().days();
export const getCurrentMonth = () => moment().month();
export const getCurrentYear = () => moment().year();
export const getPreviousYear = () => moment().subtract(1, "years").year();
export const getNextYear = () => moment().add(1, "years").year();

const getYesterDay = () => moment().subtract(1, "day").format("DD MMM YYYY");

const getStartOfCurrentWeek = () =>
  moment().startOf("week").format("DD MMM YYYY");

const getStartOfCurrentYear = () =>
  moment().startOf("year").format("DD MMM YYYY");

const presentor = (date) => moment(date).format("D MMM YYYY");

const normalPresentor = (date) => moment(date).format("DD MMM, YYYY");

const simplePresentor = (date) => moment(date).format("DD MMM YYYY");

const hyphenPresentor = (date) => moment(date).format("YYYY-MM-DD");

const formatter = (date) => moment(date);

/** converts date obj to YYYY-MM-DD */
const getTodaysDate = () => new Date().toISOString().slice(0, 10);

const convertDateToString = (date) =>
  moment(date).isValid()
    ? date.toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

const getTomorrowDate = () => moment(new Date()).add(1, "days");

const getYesterdaysDate = () => moment(new Date()).subtract(1, "days");

const routine = () => {
  const time = new Date().getHours();
  const minutes = new Date().getMinutes();
  switch (true) {
    case time >= 0 && minutes >= 0 && time < 12 && minutes < 60:
      return "Morning";
    case time >= 12 && minutes >= 0 && time < 17 && minutes < 60:
      return "Afternoon";
    case time >= 17 && minutes >= 0 && time < 20 && minutes < 60:
      return "Evening";
    default:
      return "Night";
  }
};
const getCurrentTime = () => moment().format("hh:mm");
const getCurrentTimeMeridiem = () => moment().format("A");

const timePresenter = (dateTime) =>
  moment(dateTime).isValid() ? moment(dateTime).format("hh:mm:ss A") : "";

const timewithoutSecond = (dateTime) => (
  console.log(moment(dateTime)),
  moment(dateTime).isValid() ? moment(dateTime).format("hh:mm A") : ""
);

const dateTimePresenter = (dateTime) =>
  moment(dateTime).isValid()
    ? moment(dateTime).format("DD MMM, YYYY / HH:mm")
    : "";

const dateTimeFormat = (dateTime) =>
  moment(dateTime).isValid()
    ? moment(dateTime).format("DD MMM, YYYY | hh:mm A")
    : "";

const getStartOfLastYear = () => moment().subtract(1, "year").startOf("year");

const timeAgo = (date) => moment(date).fromNow();

const parseDateByFormat = (date, format) => moment(date).format(format);

const setDateTime = (date, value) => moment(date).set(value);

const getDurationInInteger = (date) =>
  parseInt(moment.duration(moment(new Date()).diff(date)).asDays());

const getTimeDurationInSeconds = (start, end) =>
  moment.duration(moment(end).diff(start)).asSeconds();

const formatToReadableDate = (date) => moment(date).format("ll");

const dateConfiguration = [
  {
    id: 1,
    title: "Today",
    date: {
      start: getCurrentDay(new Date()),
      end: getCurrentDay(new Date()),
    },
  },
  {
    id: 2,
    title: "MTD",
    date: {
      start: getStartOfCurrentMonth(),
      end: getCurrentDay(),
    },
  },
  {
    id: 3,
    title: "P3M",
    date: {
      start: getP3MStartDay(),
      end: getCurrentDay(),
    },
  },
  {
    id: 4,
    title: "P6M",
    date: {
      start: getP6MStartDay(),
      end: getCurrentDay(),
    },
  },
  {
    id: 5,
    title: "YTD",
    date: {
      start: getStartOfCurrentYear(),
      end: getCurrentDay(),
    },
  },
];

export {
  formatter,
  presentor,
  getTodaysDate,
  getCurrentDay,
  getP3MStartDay,
  getP6MStartDay,
  normalPresentor,
  getStartOfCurrentYear,
  getStartOfCurrentMonth,
  getEndOfCurrentMonth,
  getYesterDay,
  getTomorrowDate,
  convertDateToString,
  routine,
  dateTimePresenter,
  simplePresentor,
  dateConfiguration,
  dateTimeFormat,
  getLastMonthStartDay,
  getStartOfCurrentWeek,
  getLastMonthEndDay,
  getStartOfLastYear,
  getStartOfMonth,
  timePresenter,
  hyphenPresentor,
  getCurrentTime,
  getCurrentTimeMeridiem,
  timewithoutSecond,
  getYesterdaysDate,
  timeAgo,
  parseDateByFormat,
  setDateTime,
  getDurationInInteger,
  getTimeDurationInSeconds,
  formatToReadableDate,
};
