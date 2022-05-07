import { WORLDTIME_API } from "../config/enviroments";
import { cityCountry, dateFormat, dayOrNight, timeOfDay } from "@utils/dateFormat";
import axios, { AxiosInstance } from "axios";
import { WorldtimeResponse } from "interfaces/Worldtime.interface";

const axiosInstance : AxiosInstance = axios.create({
    baseURL: WORLDTIME_API.WORLDTIME_URL,
    timeout: 30000,
    timeoutErrorMessage: 'Hubo un problema en la conexión por favor vuelva a intentarlo'
});


const worldtimeInfo = async () => {
    const { data } = await axiosInstance.get<WorldtimeResponse>(`/api/ip`);
    return {
        time: dateFormat(data.datetime, data.timezone),
        datetime: data.datetime,
        timezone: data.timezone,
        dayWeek: data.day_of_week,
        weekNumber: data.week_number,
        dateYear: data.day_of_year,
        timeOfDay: timeOfDay(data.datetime, data.timezone),
        dayOrNight: dayOrNight(data.datetime),
        code: data.abbreviation,
        cityCountry: cityCountry(data.timezone).toUpperCase()
    }
}


export {
    worldtimeInfo
}

