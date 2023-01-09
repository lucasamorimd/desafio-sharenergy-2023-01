import { Date } from "../types/date";

const getDate = (): Date => {
  const date = new Date(Date.now());
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  return {
    day: day.length < 1 ? parseInt("0" + day) : parseInt(day),
    month: month.length < 1 ? parseInt("0" + month) : parseInt(month),
    year: date.getFullYear(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

export { getDate };
