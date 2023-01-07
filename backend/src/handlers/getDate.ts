import { Date } from "../types/date";

const getDate = (): Date => {
  const date = new Date(Date.now());
  return {
    day: date.getDay(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

export { getDate };
