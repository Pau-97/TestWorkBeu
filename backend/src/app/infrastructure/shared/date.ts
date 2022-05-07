import moment from "moment-timezone";

const timezone = 'America/Lima';
export const getDatetimeZoneLima = (): string => {
  let dateTime = moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss');
  return dateTime;
}

export const getCurrentDateFormat = (format: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  return moment().format(format);
}





