import { Date } from "../types/date";

const getDate = (): Date => {
  const date = new Date();
  return {
    day: date.getUTCDay(),
    month: date.getUTCMonth() + 1,
    year: date.getUTCFullYear(),
    hour: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
  };
};

export { getDate };
